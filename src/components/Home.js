import './Styles.css';
import Button from './AddButton';
import OngoingTasks from './OngoingTasks';
import Header from './Header';
import CompletedTasks from './CompletedTasks';
import AddTask from './AddTask';

const Home = ({
  ongoingTasks,
  setOngoingTasks,
  completedTasks,
  setCompletedTasks,
  showAddTask,
  setAddTask,
}) => {
  const addOngoingTask = (task) => {
    setOngoingTasks([...ongoingTasks, task]);
  };

  const addCompletedTask = (task) => {
    setCompletedTasks([...completedTasks, task]);
  };

  const moveOngoingTask = (task) => {
    addCompletedTask(task);
    deleteOngoingTask(task);
  };

  const moveCompleteTask = (task) => {
    addOngoingTask(task);
    deleteCompletedTask(task);
  };

  const deleteOngoingTask = (task) => {
    setOngoingTasks(ongoingTasks.filter((todo) => todo.title !== task.title));
  };

  const deleteCompletedTask = (task) => {
    setCompletedTasks(
      completedTasks.filter((todo) => todo.title !== task.title)
    );
  };

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  return (
    <div>
      <Header />
      <p style={{ fontSize: '1.25vw', marginTop: '2.5vw' }}>
        📅 Today is {today.toDateString()}. Here is your to-do list!
      </p>
      <div className="task-btn">
        <h2 style={{ padding: '0 0 0.25vw 0' }}>Ongoing Tasks</h2>
        <Button
          onClick={() => setAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />
      </div>

      {showAddTask && <AddTask onAdd={addOngoingTask} />}
      {ongoingTasks.length > 0 ? (
        <OngoingTasks
          ongoingTasks={ongoingTasks}
          onMove={moveOngoingTask}
          onDelete={deleteOngoingTask}
        />
      ) : (
        'No tasks to show.'
      )}

      <div className="task-btn">
        <h2 style={{ padding: '0 0 0.25vw 0' }}>Completed Tasks</h2>
        <button
          className="home-btn delete"
          onClick={() => setCompletedTasks([])}
        >
          Delete All
        </button>
      </div>

      {completedTasks.length > 0 ? (
        <CompletedTasks
          completedTasks={completedTasks}
          onMove={moveCompleteTask}
          onDelete={deleteCompletedTask}
        />
      ) : (
        'No tasks to show.'
      )}
    </div>
  );
};

export default Home;
