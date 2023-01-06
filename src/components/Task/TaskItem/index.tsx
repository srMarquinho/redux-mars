import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useAppDispatch } from "../../../redux/hooks";
import { deleteItem, TaskItem as TaskItemInterface, updateId } from "../../../redux/reducers/taskItems";

/**
 * TaskItemProps interface
 *
 * @interface TaskItemProps
 */
interface TaskItemProps {
  taskItem: TaskItemInterface
}

/**
 * TaskItem component
 *
 * @param {TaskItemProps} { taskItem }
 * @return {*}
 */
function TaskItem({ taskItem }: TaskItemProps) {
  const dispatch = useAppDispatch();

  function onEditClick() {
    dispatch(updateId(taskItem._id as string));
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {taskItem.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {taskItem.assignedTo}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="body2">
          {taskItem.description}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom color="text.secondary">
          Added By: {taskItem.addedBy}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onEditClick()}>Edit</Button>
        <Button size="small" color="error" onClick={() => dispatch(deleteItem(taskItem))}>Delete</Button>
      </CardActions>
    </Card>
  )
}

export default TaskItem;