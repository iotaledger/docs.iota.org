/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Welcome',
      id: "welcome",
    },
    {
      type: 'category',
      label: 'For Developers',
      items: 
      [
        {
          type: 'doc',
          label: 'Developer\'s Guide',
          id: 'for_devs/developer_guide'
        },
        {
          type: 'category',
          label: 'Bag of Tricks',
          items:
          [
            {
              type: 'doc',
              label: 'Introduction',
              id: 'for_devs/bag_of_tricks/bag_of_tricks'
            },
            {
              type: 'doc',
              label: 'The Right Questions',
              id: 'for_devs/bag_of_tricks/questions'
            },
            {
              type: 'doc',
              label: 'Mind Map',
              id: 'for_devs/bag_of_tricks/mind_map'
            },
          ]
        },
        {
          type: 'doc',
          label: 'Request a Technical Writer',
          id: 'for_devs/request_tw'
        }
      ],
    },
    {
      type: 'category',
      label: 'For Writers',
      items: 
      [
        {
          type: 'doc',
          label: 'Technical Writer\'s Guide',
          id: 'for_tws/writer_guide'
        },
        {
          type: 'doc',
          label: 'Style Guide',
          id: 'for_tws/style_guide'
        },
        {
          type: 'doc',
          label: 'Internal Review Process',
          id: 'for_tws/internal_review'
        },
      ],
    },
  ],
};
