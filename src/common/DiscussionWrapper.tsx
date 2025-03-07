import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { DiscussionContainer, Loader } from 'oa-components'
import { useCommonStores } from 'src/common/hooks/useCommonStores'
import { transformToUserComments } from 'src/common/transformToUserComments'
import { MAX_COMMENT_LENGTH } from 'src/constants'
import { logger } from 'src/logger'
import { getResearchCommentId } from 'src/pages/Research/Content/helper'
import { nonDeletedCommentsCount } from 'src/utils/nonDeletedCommentsCount'
import { Text } from 'theme-ui'

import { HideDiscussionContainer } from './HideDiscussionContainer'

import type { IDiscussion } from 'oa-shared'

const DISCUSSION_NOT_FOUND = 'Discussion not found :('
const LOADING_LABEL = 'Loading the awesome discussion'

interface IProps {
  sourceType: IDiscussion['sourceType']
  sourceId: string
  setTotalCommentsCount: (number: number) => void
  showComments?: boolean
  canHideComments?: boolean
  primaryContentId?: string | undefined
}

const getHighlightedCommentId = () => {
  const hash = window.location.hash
  if (!hash) return

  const filterOutResearchUpdate = getResearchCommentId(hash)
  return filterOutResearchUpdate.replace('#comment:', '')
}

export const DiscussionWrapper = observer((props: IProps) => {
  const {
    canHideComments,
    primaryContentId,
    sourceType,
    setTotalCommentsCount,
    sourceId,
    showComments,
  } = props

  const [comment, setComment] = useState('')
  const [discussion, setDiscussion] = useState<IDiscussion | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { discussionStore } = useCommonStores().stores
  const highlightedCommentId = getHighlightedCommentId()

  const transformComments = (discussion: IDiscussion) => {
    if (!discussion) return

    const comments = transformToUserComments(
      discussion.comments,
      discussionStore.activeUser,
    )
    const count = nonDeletedCommentsCount(comments)
    setTotalCommentsCount(count)

    return setDiscussion({ ...discussion, comments })
  }

  useEffect(() => {
    const loadDiscussion = async () => {
      try {
        const discussion =
          await discussionStore.fetchOrCreateDiscussionBySource(
            sourceId,
            sourceType,
            primaryContentId,
          )

        if (discussion) {
          transformComments(discussion)
        }
      } catch (error) {
        logger.debug(error)
      }
      setIsLoading(false)
    }
    loadDiscussion()
  }, [sourceId])

  const handleEdit = async (_id: string, comment: string) => {
    if (!discussion) return

    setIsSubmitting(true)
    const updatedDiscussion = await discussionStore.editComment(
      discussion,
      _id,
      comment,
    )
    logger.info({ _id, comment }, `${sourceType} comment edited`)

    if (updatedDiscussion) {
      transformComments(updatedDiscussion)
    }

    setIsSubmitting(false)
  }

  const handleEditRequest = async () => {
    logger.debug('Edit existing comment')
  }

  const handleDelete = async (_id: string) => {
    if (!discussion) return

    setIsSubmitting(true)
    const updatedDiscussion = await discussionStore.deleteComment(
      discussion,
      _id,
    )
    logger.info({ _id }, `${sourceType} comment deleted`)

    if (updatedDiscussion) {
      transformComments(updatedDiscussion)
    }

    setIsSubmitting(false)
  }

  const onSubmit = async (comment: string) => {
    if (!comment || !discussion) return

    setIsSubmitting(true)

    const updatedDiscussion = await discussionStore.addComment(
      discussion,
      comment,
    )

    if (updatedDiscussion) {
      transformComments(updatedDiscussion)
    }

    if (updatedDiscussion) {
      setComment('')
    }

    setIsSubmitting(false)
  }

  const handleSubmitReply = async (commentId: string, reply: string) => {
    if (!discussion) return

    setIsSubmitting(true)

    const updatedDiscussion = await discussionStore.addComment(
      discussion,
      reply,
      commentId,
    )
    logger.info({ commentId, reply }, `${sourceType} reply submitted`)

    if (updatedDiscussion) {
      transformComments(updatedDiscussion)
    }

    setIsSubmitting(false)
  }

  const discussionProps = {
    supportReplies: true,
    comments: discussion && (discussion.comments as any),
    maxLength: MAX_COMMENT_LENGTH,
    comment,
    onChange: setComment,
    onMoreComments: () => {},
    handleEdit,
    handleEditRequest,
    handleDelete,
    highlightedCommentId,
    onSubmit,
    onSubmitReply: handleSubmitReply,
    isSubmitting,
    isLoggedIn: discussionStore?.activeUser
      ? !!discussionStore.activeUser
      : false,
  }

  return (
    <>
      {isLoading && <Loader label={LOADING_LABEL} sx={{ padding: 2 }} />}
      {!isLoading && !discussion && <Text>{DISCUSSION_NOT_FOUND}</Text>}
      {discussion && canHideComments && (
        <HideDiscussionContainer
          commentCount={nonDeletedCommentsCount(discussion.comments)}
          showComments={showComments}
        >
          <DiscussionContainer {...discussionProps} />
        </HideDiscussionContainer>
      )}
      {discussion && !canHideComments && (
        <DiscussionContainer {...discussionProps} />
      )}
    </>
  )
})
