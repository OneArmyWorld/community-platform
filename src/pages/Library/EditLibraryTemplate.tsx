import { DifficultyLevel } from 'oa-shared'

import type { ILibrary } from 'oa-shared'

// initialise fields which contain nested objects (and steps to have 3 placeholders)
const INITIAL_VALUES: Partial<ILibrary.FormInput> = {
  steps: [
    {
      title: 'EDITABLE',
      text: '',
      images: [],
      _animationKey: 'unique1',
    },
    {
      title: 'EDITABLE',
      text: '',
      images: [],
      _animationKey: 'unique2',
    },
    {
      title: 'EDITABLE',
      text: '',
      images: [],
      _animationKey: 'unique3',
    },
  ],
  tags: {},
  files: [],
}

const TESTING_VALUES: Partial<ILibrary.FormInput> = {
  title: `Test-${new Date().toString()}`,
  description: 'example description',
  time: '1-2 weeks',
  difficulty_level: DifficultyLevel.HARD,
  files: [],
  steps: [
    {
      title: 'Step 1',
      text: 'Example step text',
      images: [],
      _animationKey: 'unique1',
    },
  ],
}

export default {
  INITIAL_VALUES,
  TESTING_VALUES,
}
