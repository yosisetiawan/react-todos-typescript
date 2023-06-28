import { Container, Text, Group, TextInput, Button, Space, Paper } from '@mantine/core'
import { useMemo, useState } from 'react';
import TaskLists from '../components/TaskLists';

function App(){

    const [todos, setTodos] = useState<Array<string>>([]);
    const [task, setTask] = useState<string>('')
    
    const isDisabledSubmit:boolean = useMemo<boolean>(() => task.length == 0,[task])

    const handleButtonOnSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        setTodos((prevValue) => [...prevValue, task])

        setTask('')
    }
    
    return(
        <Container p="md">
            <Text fz="lg" ta="center">Simple Todo Apps</Text>
            <Space h="md"/>
            <Group position="center">
                <TextInput
                placeholder="go to the store"
                onChange={(event) => setTask(event.target.value)}
                value={task}
                />
                <Button
                onClick={handleButtonOnSubmit}
                disabled={isDisabledSubmit}
                >Simpan</Button>
            </Group>
            <Space h='md'/>
            <TaskLists tasks={todos}/>
        </Container>
    )
}

export default App;