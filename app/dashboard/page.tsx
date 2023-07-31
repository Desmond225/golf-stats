'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

export default function Dashboard() {
  const [roundId, setRoundId] = useState('')
  const [holeNumber, setHoleNumber] = useState(1)
  const [score, setScore] = useState(0)
  const [fairwayHit, setFairwayHit] = useState(false)
  const [greenHit, setGreenHit] = useState(false)
  const [driveDistance, setDriveDistance] = useState(0)
  const [approachDistance, setApproachDistance] = useState(0)
  const [proximityToHole, setProximityToHole] = useState(0)
  const [puttsAmount, setPuttsAmount] = useState(0)
  const [puttMadeLength, setPuttMadeLength] = useState(0)
  const [scramble, setScramble] = useState(false)
  const [sandSave, setSandSave] = useState(false)
  const [committedShots, setCommittedShots] = useState(0)

  const handleSubmit = async (event) => {
    event.preventDefault()
    // TODO: Save the data to the database
  }

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 text-white">
      <form onSubmit={handleSubmit}>
        <label>
          Round ID:
          <input type="text" value={roundId} onChange={e => setRoundId(e.target.value)} />
        </label>
        <label>
          Hole Number:
          <input type="number" value={holeNumber} onChange={e => setHoleNumber(Number(e.target.value))} min="1" max="18" />
        </label>
        <label>
          Score:
          <input type="number" value={score} onChange={e => setScore(Number(e.target.value))} min="0" />
        </label>
        <label>
          Fairway Hit:
          <input type="checkbox" checked={fairwayHit} onChange={e => setFairwayHit(e.target.checked)} />
        </label>
        <label>
          Green Hit:
          <input type="checkbox" checked={greenHit} onChange={e => setGreenHit(e.target.checked)} />
        </label>
        <label>
          Drive Distance:
          <input type="number" value={driveDistance} onChange={e => setDriveDistance(Number(e.target.value))} min="0" />
        </label>
        <label>
          Approach Distance:
          <input type="number" value={approachDistance} onChange={e => setApproachDistance(Number(e.target.value))} min="0" />
        </label>
        <label>
          Proximity to Hole:
          <input type="number" value={proximityToHole} onChange={e => setProximityToHole(Number(e.target.value))} min="0" />
        </label>
        <label>
          Putts Amount:
          <input type="number" value={puttsAmount} onChange={e => setPuttsAmount(Number(e.target.value))} min="0" />
        </label>
        <label>
          Putt Made Length:
          <input type="number" value={puttMadeLength} onChange={e => setPuttMadeLength(Number(e.target.value))} min="0" />
        </label>
        <label>
          Scramble:
          <input type="checkbox" checked={scramble} onChange={e => setScramble(e.target.checked)} />
        </label>
        <label>
          Sand Save:
          <input type="checkbox" checked={sandSave} onChange={e => setSandSave(e.target.checked)} />
        </label>
        <label>
          Committed Shots:
          <input type="number" value={committedShots} onChange={e => setCommittedShots(Number(e.target.value))} min="0" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
