import { BlogItem, TimeTable } from "@/api/services/blog/model"

// index로 필터링
export const filterAndSortIndex = (
  items: BlogItem[],
  filter: number,
): BlogItem[] => {
  const sortFunctions: { [key: number]: (a: BlogItem, b: BlogItem) => number } =
    {
      1: (a, b) => b.like - a.like,
      2: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      3: (a, b) => b.comment - a.comment,
    }
  return items.slice().sort(sortFunctions[filter] || (() => 0))
}
// time으로 필터링
export const filterAndSortTime = (
  items: BlogItem[],
  filter: number,
): BlogItem[] => {
  const now = new Date()

  let filteredPosts = items

  if (filter === TimeTable.day) {
    filteredPosts = items.filter((post) => {
      const postDate = new Date(post.date)
      const oneDayAgo = new Date(
        now.getTime() - TimeTable.day * 24 * 60 * 60 * 1000,
      )
      return postDate >= oneDayAgo && postDate <= now
    })
  } else if (filter === TimeTable.month) {
    filteredPosts = items.filter((post) => {
      const postDate = new Date(post.date)
      const sevenDaysAgo = new Date(
        now.getTime() - TimeTable.month * 24 * 60 * 60 * 1000,
      )
      return postDate >= sevenDaysAgo && postDate <= now
    })
  } else if (filter === TimeTable.week) {
    filteredPosts = items.filter((post) => {
      const postDate = new Date(post.date)
      const oneYearAgo = new Date(
        now.getTime() - TimeTable.week * 24 * 60 * 60 * 1000,
      )
      return postDate >= oneYearAgo && postDate <= now
    })
  } else if (filter === TimeTable.year) {
    filteredPosts = items.filter((post) => {
      const postDate = new Date(post.date)
      const oneYearAgo = new Date(
        now.getTime() - TimeTable.year * 24 * 60 * 60 * 1000,
      )
      return postDate >= oneYearAgo && postDate <= now
    })
  }

  return filteredPosts
}
