const CompletedTasks = () => {
  const completedTasks = [
    {
      todo: 'Call mom. ',
      notes: 'Ask about trip to NYC.',
    },
  ];

  const listCompletedTasks = completedTasks.map((task) => (
    <div className="todo todo-complete">
      <div>
        <h3>{task.todo}</h3>
        <p>{task.notes}</p>
      </div>

      <div className="times">15m / 30m</div>
    </div>
  ));

  return <>{listCompletedTasks}</>;
};

export default CompletedTasks;
