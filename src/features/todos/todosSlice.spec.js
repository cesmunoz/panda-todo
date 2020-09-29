import todos, { addTodo, toggleTodo } from './todosSlice';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual([])
  })

  it('should handle ADD_TODO', ()=> {
    expect(todos([], { 
      type: addTodo.type, 
      payload: {
        id: 0,
        text: 'Run the test' 
      }
    })).toEqual([{ 
      id: 0, 
      text: 'Run the test', 
      completed: false
    }])

    expect(todos([{
      id: 0, 
      text: 'Run the test',
      completed: false
    }], {
      type: addTodo.type,
      payload: {
        id: 1,
            text: 'Use Redux'
      }
    })).toEqual([{
      id:0,
      text: 'Run the test',
      completed: false
    }, {
      id: 1,
      text: 'Use Redux',
      completed: false
    }])

    expect(todos([{
      id: 0,
      text: 'Run the test',
      completed: false
    }, {
      id: 1,
      text: 'Use Redux',
      completed: false
    }], {
      type: addTodo.type,
      payload: {
        id: 2,
        text: 'Fix the test'
      }
    })).toEqual([{
      id: 0,
      text: 'Run the test',
      completed: false
    }, {
      id: 1,
      text: 'Use Redux',
      completed: false
      }, {
        id: 2,
        text: 'Fix the test',
        completed: false
      }])
  })
  
  it('should handle TOGGLE_TODO', () => {
    expect(
      todos(
        [
          {       
            id: 0,
            text: 'Run the test',
            completed: false
          }
        ]
      ,
      {
        type: toggleTodo.type,
        payload: 0
      }
    )).toEqual([
      { 
        id: 0, 
        text: 'Run the test', 
        completed: true
      }
    ])
  })

  expect(
    todos(
      [
        {       
          id: 0,
          text: 'Run the test',
          completed: false
        },
        {       
          id: 1,
          text: 'Use Redux',
          completed: true
        }
      ]
    ,
    {
      type: toggleTodo.type,
      payload: 0
    }
  )).toEqual([
    { 
      id: 0, 
      text: 'Run the test', 
      completed: true
    },
    { 
      id: 1, 
      text: 'Use Redux', 
      completed: true
    }
  ])
})

describe('addTodo', () => {
  it('should generate incrementing todo IDS', () => {
    const action1 = addTodo('a')
    const action2 = addTodo('b')
    expect(action1.payload).toEqual({ id: 0, text: 'a' })
    expect(action2.payload).toEqual({ id: 1, text: 'b' })
  })
})