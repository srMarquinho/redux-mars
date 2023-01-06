import { Grid } from "@mui/material";
import { useAppSelector } from "../../../redux/hooks";
import TaskItem from "../TaskItem";

/**
 * Task List
 *
 * @return {*}
 */
function TaskList() {
  const taskItems = useAppSelector((state) => state.taskItems.list)

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      {taskItems.map((taskItem, i) => {
        return (
          <Grid key={i} item xs={4}>
            <TaskItem taskItem={taskItem} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default TaskList;