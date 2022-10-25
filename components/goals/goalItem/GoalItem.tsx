import { useContext, useState } from 'react'
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

import AppContext from '../../appContext/AppContext';

type Props = {
    item: {
      goal: {
        goalTitle: string,
        goalTodoArr: Array<string>
      }
    },
    key: string
}

const GoalItem = ({ item }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [ goalTodo, setGoalTodo ] = useState<string>('')
  const handler = () => setVisible(true);

  const context = useContext(AppContext)

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const handleChange = (setter: any, text: string, state: string) => {
    setter(text)
  }

  const addTodoToDb = async () => {
    
    const res = await fetch(`${process.env.URL}/api/goals`, {
      method: 'PATCH',
      body: JSON.stringify({
        username: context.user.username,
        goalTitle: item.goal.goalTitle,
        goalTodo: goalTodo,
        addGoalTodo: 'true'
        
      })
    })
    const data = await res.json()
    console.log(data)    
    setGoalTodo('')
  }

  return (
    <div>
        {/* {item.goalTitle} */}
        <h1>{item.goal.goalTitle}</h1>
        <div>
          <Button auto shadow onClick={handler}>
            Add Goal Todos
          </Button>
          <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <textarea placeholder='add todo' onChange={(e) => handleChange(setGoalTodo, e.target.value, goalTodo)} />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto flat color="error" onClick={addTodoToDb}>
            Add Todo
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    </div>
  )
}

export default GoalItem