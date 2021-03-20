import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/': [
    {
      text: 'Поле',
      children: [
        { text: 'Приветствие', link: '/field/' },
        { text: 'Направления', link: '/field/areas' },
      ],
    },

    {
      text: 'Конспекты',
      children: [
        { text: 'Транзактный анализ', link: '/synopsis/transact/'},
      ],
    },

    {
      text: 'О проекте',
      children: [
        { text: 'Контакты', link: '/contact' },
        { text: 'Поддержать', link: '/support' },
      ],
    },
  ],
}
