export default {
  'GET /news': {
    state: true,
    msg: null,
    data: {
      origin: [
        {
          url: 'csdn',
          title: 'csdn news',
          total: 12,
          state: {
            loading: false,
          },
          passage: [
            {
              title: 'passage title 1',
            },
            {
              title: 'csdn title 2',
            },
            {
              title: 'passage title 3',
            },
          ],
        },
        {
          url: 'cnblogs',
          title: 'cnblogs news',
          total: 9,
          state: {
            loading: false,
          },
          passage: [
            {
              title: 'cnblogs title 1',
            },
            {
              title: 'passage title 2',
            },
            {
              title: 'passage title 3',
            },
          ],
        },
        {
          url: 'segmentfault',
          title: 'segmentfault news',
          total: 15,
          state: {
            loading: false,
          },
          passage: [
            {
              title: 'passage title 1',
            },
            {
              title: 'passage title 2',
            },
            {
              title: 'passage title 3',
            },
          ],
        },
      ]
    },
  },

  'POST /test/pmsg': {TEST: 'SUCCESS'}
};
