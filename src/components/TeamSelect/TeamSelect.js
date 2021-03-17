import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TeamSelect() {
  const teamSelect = useSelector(store => store.teamSelect)
  const [teamId, selectTeamId] = useState('')
  const [teamName, setTeamName] = useState('')
  const dispatch = useDispatch();

  const registerTeam = (event) => {
    event.preventDefault();

    dispatch({
      type: 'TEAM_CREATE',
      payload: {
        teamName: teamName,
      },
    });
  };

  return(
    <form className="teamForm" onSubmit={registerTeam}>
      <div> 
        <label htmlFor="teamName">
          Team Name:
          <input
            type="text"
            name="Team Name"
            value={teamName}
            required
            onChange={(event) => setTeamName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Create" />
      </div>
      {/* <select
        name="team"
        id="pickTeam"
        value={teamId}
        onChange={(event) => selectTeamId(event.target.value)}>
          <option value="" disabled>Select a Team:</option>
            {teamSelect.map(team => {
              return(
                <option key={team.id} value={team.id}>{team.name}</option>
              )
            })}
      </select> */}
    </form>
  )
}

export default TeamSelect;