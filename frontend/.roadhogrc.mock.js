export default {
  'GET /news': {
    state: true,
    msg: null,
    data: {
      origin: [
        {
          key: 'csdn',
          url: 'www.csdn.com',
          total: 12,
          state: {
            current: 1,
            loading: false,
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
        {
          key: 'cnblogs',
          url: 'www.cnblogs.com',
          total: 9,
          state: {
            current: 1,
            loading: false,
          },
          passage: [
            {
              title: 'cnblogs title 1',
              link: 'www.cnblogs.com/p1',
              author: 'cnauth1',
              label: 'TEST',
              support: 206,
            },
            {
              title: 'cnblogs title 2',
              link: 'www.cnblogs.com/p2',
              author: 'cnauth2',
              label: 'Algorithm',
              support: 624,
            },
            {
              title: 'cnblogs title 3',
              link: 'www.cnblogs.com/p3',
              author: 'cnauth3',
              label: 'Http',
              support: 87,
            },
          ],
        },
        {
          key: 'segmentfault',
          url: 'www.segmentfault.com',
          total: 15,
          state: {
            current: 1,
            loading: false,
          },
          passage: [
            {
              title: 'segmentfault title 1',
              link: 'www.segmentfault.com/p1',
              author: 'cnauth3',
              label: 'Security',
              support: 2177,
            },
            {
              title: 'segmentfault title 2',
              link: 'www.segmentfault.com/p2',
              author: 'cnauth3',
              label: 'iOS',
              support: 655,
            },
            {
              title: 'segmentfault title 3',
              link: 'www.segmentfault.com/p3',
              author: 'cnauth3',
              label: 'VR',
              support: 363,
            },
          ],
        },
      ]
    },
  },

  'POST /test/pmsg': {TEST: 'SUCCESS'}
};
