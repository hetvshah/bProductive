const OngoingTasks = ({ ongoingTasks }) => {
  // const ongoingTasks = [
  //   {
  //     todo: 'Finish part 7 of CIS 121 programming. ',
  //     notes: 'Make sure to pay attention to runtimes.',
  //   },
  //   {
  //     todo: 'Respond to emails.',
  //     notes: 'Specifically John Doe and research mentor.',
  //   },
  //   {
  //     todo: 'Search for apartments.',
  //     notes: '',
  //   },
  // ];

  const listOngoingTasks = ongoingTasks.map((task) => (
    <div className="todo">
      <div>
        <h3>
          {/* <input type="checkbox" /> */}
          {task.text}
        </h3>
        <p>Due Date: {task.day}</p>
        <p>Notes: {task.notes}</p>
      </div>

      <div className="times">{task.estimate}</div>
    </div>
  ));

  return <>{listOngoingTasks}</>;
};

export default OngoingTasks;
