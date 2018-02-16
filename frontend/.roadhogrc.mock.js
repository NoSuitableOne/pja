export default {
  'GET /news/csdn': {
    status: 'ok',
    data: [
      {
        title: 'csdn title 1',
        link: 'www.csdn.com/p1',
        author: 'csauth1',
        label: 'FE',
        support: 101,
      },
      {
        title: 'csdn title 2',
        link: 'www.csdn.com/p2',
        author: 'csauth2',
        label: 'JAVA',
        support: 254,
      },
      {
        title: 'csdn title 3',
        link: 'www.csdn.com/p3',
        author: 'csauth3',
        label: 'FE',
        support: 95,
      },
      {
        title: 'csdn title 4',
        link: 'www.csdn.com/p4',
        author: 'csauth4',
        label: 'FE',
        support: 101,
      },
      {
        title: 'csdn title 5',
        link: 'www.csdn.com/p5',
        author: 'csauth5',
        label: 'JAVA',
        support: 254,
      },
      {
        title: 'csdn title 6',
        link: 'www.csdn.com/p6',
        author: 'csauth6',
        label: 'FE',
        support: 95,
      },
      {
        title: 'csdn title 7',
        link: 'www.csdn.com/p7',
        author: 'csauth7',
        label: 'FE',
        support: 101,
      },
      {
        title: 'csdn title 8',
        link: 'www.csdn.com/p8',
        author: 'csauth8',
        label: 'JAVA',
        support: 254,
      },
      {
        title: 'csdn title 9',
        link: 'www.csdn.com/p9',
        author: 'csauth9',
        label: 'FE',
        support: 95,
      },
    ],
  },

  'GET /news/cnblogs': {
    status: 'ok',
    data: [
      {
        title: 'cnblogs title 1',
        link: 'www.cnblogs.com/p1',
        author: 'cbauth1',
        label: 'FE',
        support: 101,
      },
      {
        title: 'cnblogs title 2',
        link: 'www.cnblogs.com/p2',
        author: 'cbauth2',
        label: 'JAVA',
        support: 254,
      },
      {
        title: 'cnblogs title 3',
        link: 'www.cnblogs.com/p3',
        author: 'cbauth3',
        label: 'FE',
        support: 95,
      },
      {
        title: 'cnblogs title 4',
        link: 'www.cnblogs.com/p4',
        author: 'cbauth4',
        label: 'FE',
        support: 101,
      },
      {
        title: 'cnblogs title 5',
        link: 'www.cnblogs.com/p5',
        author: 'cbauth5',
        label: 'JAVA',
        support: 254,
      },
      {
        title: 'cnblogs title 6',
        link: 'www.cnblogs.com/p6',
        author: 'cbauth6',
        label: 'FE',
        support: 95,
      },
      {
        title: 'cnblogs title 7',
        link: 'www.cnblogs.com/p7',
        author: 'cbauth7',
        label: 'FE',
        support: 101,
      },
      {
        title: 'cnblogs title 8',
        link: 'www.cnblogs.com/p8',
        author: 'cbauth8',
        label: 'JAVA',
        support: 254,
      },
      {
        title: 'cnblogs title 9',
        link: 'www.cnblogs.com/p9',
        author: 'cbauth9',
        label: 'FE',
        support: 95,
      },
    ],
  },

  'GET /news/segmentfault': {
    status: 'ok',
    data: [
      {
        title: 'segmentfault title 1',
        link: 'www.segmentfault.com/p1',
        author: 'sfauth1',
        label: 'Security',
        support: 2177,
      },
      {
        title: 'segmentfault title 2',
        link: 'www.segmentfault.com/p2',
        author: 'sfauth2',
        label: 'iOS',
        support: 655,
      },
      {
        title: 'segmentfault title 3',
        link: 'www.segmentfault.com/p3',
        author: 'sfauth3',
        label: 'VR',
        support: 363,
      },
      {
        title: 'segmentfault title 4',
        link: 'www.segmentfault.com/p4',
        author: 'sfauth4',
        label: 'Security',
        support: 2177,
      },
      {
        title: 'segmentfault title 5',
        link: 'www.segmentfault.com/p5',
        author: 'sfauth5',
        label: 'iOS',
        support: 655,
      },
      {
        title: 'segmentfault title 6',
        link: 'www.segmentfault.com/p6',
        author: 'sfauth6',
        label: 'VR',
        support: 363,
      },
    ]
  },

  'GET /news/csdn/:page': {
    state: true,
    msg: null,
    data: {
      origin: {
        key: 'csdn',
        url: 'www.csdn.com',
        total: 12,
        state: {
          current: 2,
          loading: true,
        },
        passage: [
          {
            title: 'csdn title 1',
            link: 'www.csdn.com/p1',
            author: 'csauth1',
            label: 'FE',
            support: 101,
          },
          {
            title: 'csdn title 2',
            link: 'www.csdn.com/p2',
            author: 'csauth2',
            label: 'JAVA',
            support: 254,
          },
          {
            title: 'csdn title 3',
            link: 'www.csdn.com/p3',
            author: 'csauth3',
            label: 'FE',
            support: 95,
          },
        ],
      },
    },
  },

  'GET /news/cnblogs/:page': {
    state: true,
    msg: null,
    data: {
      origin: {
        key: 'cnblogs',
        url: 'www.cnblogs.com',
        total: 12,
        state: {
          current: 2,
          loading: true,
        },
        passage: [
          {
            title: 'cnblogs title 1',
            link: 'www.cnblogs.com/p1',
            author: 'cbauth1',
            label: 'FE',
            support: 101,
          },
          {
            title: 'cnblogs title 2',
            link: 'www.cnblogs.com/p2',
            author: 'cbauth2',
            label: 'JAVA',
            support: 254,
          },
          {
            title: 'cnblogs title 3',
            link: 'www.cnblogs.com/p3',
            author: 'cbauth3',
            label: 'FE',
            support: 95,
          },
        ],
      },
    },
  },

  'GET /news/segmentfault/:page': {
    state: true,
    msg: null,
    data: {
      origin: {
        key: 'segmentfault',
        url: 'www.segmentfault.com',
        total: 12,
        state: {
          current: 2,
          loading: true,
        },
        passage: [
          {
            title: 'segmentfault title 1',
            link: 'www.segmentfault.com/p1',
            author: 'sfauth3',
            label: 'Security',
            support: 2177,
          },
          {
            title: 'segmentfault title 2',
            link: 'www.segmentfault.com/p2',
            author: 'sfauth3',
            label: 'iOS',
            support: 655,
          },
          {
            title: 'segmentfault title 3',
            link: 'www.segmentfault.com/p3',
            author: 'sfauth3',
            label: 'VR',
            support: 363,
          },
        ],
      },
    },
  },

  'POST /test/pmsg': {TEST: 'SUCCESS'}
};
