import { Paper, Stack, Text } from "@mantine/core"

type AppProps = {
    tasks: Array<string>
}

type TaskPropsItem  = {
    taskItem: string
}

const TaskItem = ({ taskItem }: TaskPropsItem) => {
    return (
        <Paper withBorder shadow="md" p="md">
            <Text>{ taskItem }</Text>
        </Paper>
    )
}

function TaskLists({ tasks }: AppProps){
    return (
        <>
            {
                tasks.length ? 
                    <Stack spacing="xs">
                        {
                            tasks.map((task) => (
                                <TaskItem key={task} taskItem={task}/>
                            ))
                        }
                    </Stack>
                    : <Text>You have not any todo task</Text>
            }
        </>
    )
}

export default TaskLists;