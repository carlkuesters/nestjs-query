export const todoItemFields = `
    id
    title
    completed
    description
    age
    subTasksCount
  `

export const subTaskFields = `
id
title
description
completed
todoItemId
`

export const tagFields = `
id
name
`

export const pageInfoField = `
pageInfo{
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
`

export const edgeNodes = (fields: string): string => `
  edges {
    node{
      ${fields}    
    }
    cursor
  }  
  `

export const todoItemAggregateFields = `
count {
  id
  title
  description
  completed
  created
  updated
}
sum {
  id
}
avg {
  id
}
min {
  id
  title
  description
}
max {
  id
  title
  description
}    
`

export const tagAggregateFields = `
count {
  id
  name
  created
  updated
}
sum {
  id
}
avg {
  id
}
min {
  id
  name
}
max {
  id
  name
}
`

export const subTaskAggregateFields = `
count {
  id
  title
  description
  completed
  todoItemId
}
sum {
  id      
}
avg {
  id
}
min {
  id
  title
  description      
  todoItemId
}
max {
  id
  title
  description    
  todoItemId
}
`
