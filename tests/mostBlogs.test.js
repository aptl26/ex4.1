const { mostBlogs } = require('../utils/list_helper')

describe('mostBlogs', () => {
  const zeroBlogs = []

  const oneBlog = [
    {
      title: 'Third Blog',
      author: 'Mazen Deeb',
      url: 'http://www.facebook.com',
      likes: 42230,
      id: '63a74447cdbbcba4a22c8135'
    }
  ]

  const multiBlogsNormal = [
    {
      title: 'First Blog',
      author: 'Aghyad Deeb',
      url: 'http://www.google.com',
      likes: 40,
      id: '63a73a2dd776c2afc833baf3'
    },
    {
      title: 'Second Blog',
      author: 'Mayar Deeb',
      url: 'http://www.microsoft.com',
      likes: 420,
      id: '63a73a47d776c2afc833baf5'
    },
    {
      title: 'First Blog',
      author: 'Aghyad Deeb',
      url: 'http://www.google.com',
      likes: 40,
      id: '63a73a4ad776c2afc833baf7'
    },
    {
      title: 'First Blog',
      author: 'Aghyad Deeb',
      url: 'http://www.google.com',
      likes: 40,
      id: '63a73a5bd776c2afc833baf9'
    },
    {
      title: 'Third Blog',
      author: 'Mazen Deeb',
      url: 'http://www.facebook.com',
      likes: 42230,
      id: '63a74447cdbbcba4a22c8135'
    },
    {
      title: 'First Blog',
      author: 'Aghyad Deeb',
      url: 'http://www.google.com',
      likes: 40,
      id: '63a7444ccdbbcba4a22c8137'
    },
    {
      title: 'First Blog',
      author: 'Aghyad Deeb',
      url: 'http://www.google.com',
      likes: 40,
      id: '63a74462cdbbcba4a22c813a'
    },
    {
      title: 'Fourth Blog',
      author: 'Homam Deeb',
      url: 'http://www.twitter.com',
      likes: 430,
      id: '63a74d2c7c57f655cd1554bc'
    }
  ]

  const multiBlogsMultipleMostBlogs = [
    {
      title: 'First Blog',
      author: 'Aghyad Deeb',
      url: 'http://www.google.com',
      likes: 40,
      id: '63a73a2dd776c2afc833baf3'
    },
    {
      title: 'Second Blog',
      author: 'Mayar Deeb',
      url: 'http://www.microsoft.com',
      likes: 430,
      id: '63a73a47d776c2afc833baf5'
    },
    {
      title: 'First Blog',
      author: 'Aghyad Deeb',
      url: 'http://www.google.com',
      likes: 40,
      id: '63a73a4ad776c2afc833baf7'
    },
    {
      title: 'Fourth Blog',
      author: 'Homam Deeb',
      url: 'http://www.twitter.com',
      likes: 430,
      id: '63a74d2c7c57f655cd1554bc'
    },
    {
      title: 'Fourth Blog',
      author: 'Homam Deeb',
      url: 'http://www.twitter.com',
      likes: 430,
      id: '63a74d2c7c57f655cd1554bc'
    }
  ]

  test('of zero blogs is empty object', () => {
    expect(mostBlogs(zeroBlogs)).toEqual({})
  })

  test('of one blog is the author of the blog with one blog', () => {
    expect(mostBlogs(oneBlog)).toEqual({
      author: 'Mazen Deeb',
      blogs: 1
    })
  })

  test('of multiple blogs with one answer to be the answer', () => {
    expect(mostBlogs(multiBlogsNormal)).toEqual({
      author: 'Aghyad Deeb',
      blogs: 5
    })
  })

  test('of multiple blogs with multiple winners to be the last answer', () => {
    expect(mostBlogs(multiBlogsMultipleMostBlogs)).toEqual({
      author: 'Homam Deeb',
      blogs: 2
    })
  })
})
