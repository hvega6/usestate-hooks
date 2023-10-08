import React from 'react';

function GoalForm(props){
  const [formData, setFormData] = React.useState({goal: '', by:''});

  function changeHandler(e){
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e){
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal:'', by:''});
  };

  return(
    <>
      <h1>Susies' Salad Goals</h1>
      <form onSubmit={submitHandler}>
        <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler}/>
        <input type='text' name='by' placeholder='By...' value={formData.by} onChange={changeHandler}/>
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props){
  return(
    <ul>
      {props.allGoals.map((g) =>(
        <li key={g.goal}>
          <span>My Goal is to {g.goal}, by {g.goal}</span>
        </li>
      ))}
    </ul>
  )
}

export default function App() {
  const [allGoals, updateAllGoals] = React.useStates([]);

  function addGoal(goal) { updateAllGoals([...allGoals, goal]); }

  return (
    <div className="App">
      <GoalForm onAdd={addGoal}/>
      <ListOfGoals allGoals={allGoals}/>
    </div>
  );
}

