import { ChangeEvent, useEffect, useState } from 'react';
import { Button, Stack, TextField, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addItem, TaskItem, updateItem, clearUpdateId } from '../../../redux/reducers/taskItems';
import { MenuItem, setMenuItem } from '../../../redux/reducers/menu';

/**
 * TaskForm component
 *
 * @return {*}
 */
function TaskForm() {
  const dispatch = useAppDispatch();
  const updateId = useAppSelector((state) => state.taskItems.updateId);
  const taskItems = useAppSelector((state) => state.taskItems.list);

  const initialValue = {
    title: '',
    description: '',
    addedBy: '',
    assignedTo: ''
  };

  const [value, setValue] = useState<TaskItem>(initialValue);

  const [formTitle, setFormTitle] = useState('');

  useEffect(() => {
    if (!updateId) {
      setFormTitle('Add');
      dispatch(setMenuItem(MenuItem.ADD_ITEM));
    }
    const foundItem = taskItems.find(i => i._id === updateId);
    console.log('foundItem', foundItem);
    if (foundItem) {
      setFormTitle('Update');
      dispatch(setMenuItem(MenuItem.UPDATE_ITEM));
      return setValue({ ...foundItem });
    }
    return;
  }, [updateId, taskItems, dispatch]);

  /**
   * Handle change
   *
   * @param {(ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)} e
   * @param {string} field
   */
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string): void {
    setValue((prevValue) => {
      (prevValue as any)[field] = e.target.value;
      return { ...prevValue };
    });
  };

  /**
   * On submit
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!updateId) {
      dispatch(addItem(value));
    } else {
      dispatch(updateItem({ ...value, _id: updateId } as TaskItem));
    }
    dispatch(clearUpdateId());
    setValue(initialValue);
  }

  /**
   * On reset
   *
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} e
   */
  function onReset(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    dispatch(clearUpdateId());
    setValue(initialValue);
  }

  return (
    <div>
      <h1>{formTitle} Task</h1>
      <Box
        component="form"
        sx={{
          width: 'fit-content',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        // noValidate
        autoComplete="off"
        onSubmit={(e) => onSubmit(e)}
      >
        <div>
          <TextField
            required
            id="title"
            label="Title"
            value={value.title}
            onChange={(e) => handleChange(e, 'title')}
          />
          <TextField
            required
            id="addedBy"
            label="Added By"
            value={value.addedBy}
            onChange={(e) => handleChange(e, 'addedBy')}
          />
        </div>
        <div>
          <TextField
            required
            multiline
            rows={4}
            id="description"
            label="Description"
            helperText="Describe your important task"
            value={value.description}
            onChange={(e) => handleChange(e, 'description')}
          />
          <TextField
            required
            id="assignedTo"
            label="Assigned To"
            value={value.assignedTo}
            onChange={(e) => handleChange(e, 'assignedTo')}
          />
        </div>
        <Stack spacing={2}>
          <Button
            variant="contained"
            color="success"
            type='submit'
          >
            Save
          </Button>
          <Button
            variant="outlined"
            color="error"
            type='reset'
            onClick={(e) => onReset(e)}
          >
            Clear
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default TaskForm;
