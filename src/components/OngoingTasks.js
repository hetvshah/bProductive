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
          {task.todo}
        </h3>
        <p>{task.notes}</p>
      </div>

      <div className="times">15m / 30m</div>
    </div>
  ));

  return <>{listOngoingTasks}</>;
};

export default OngoingTasks;
