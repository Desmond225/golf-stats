'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import FormGroup from '@mui/material/FormGroup'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiButton-root': {
      margin: theme.spacing(1),
    },
  },
}))

export default function Dashboard() {
  const classes = useStyles()
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
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.form}>
        <TextField id="round-id" label="Round ID" value={roundId} onChange={e => setRoundId(e.target.value)} />
        <TextField id="hole-number" label="Hole Number" type="number" value={holeNumber} onChange={e => setHoleNumber(Number(e.target.value))} InputProps={{ inputProps: { min: 1, max: 18 } }} />
        <TextField id="score" label="Score" type="number" value={score} onChange={e => setScore(Number(e.target.value))} InputProps={{ inputProps: { min: 0 } }} />
        <FormControlLabel control={<Checkbox checked={fairwayHit} onChange={e => setFairwayHit(e.target.checked)} />} label="Fairway Hit" />
        <FormControlLabel control={<Checkbox checked={greenHit} onChange={e => setGreenHit(e.target.checked)} />} label="Green Hit" />
        <TextField id="drive-distance" label="Drive Distance" type="number" value={driveDistance} onChange={e => setDriveDistance(Number(e.target.value))} InputProps={{ inputProps: { min: 0 } }} />
        <TextField id="approach-distance" label="Approach Distance" type="number" value={approachDistance} onChange={e => setApproachDistance(Number(e.target.value))} InputProps={{ inputProps: { min: 0 } }} />
        <TextField id="proximity-to-hole" label="Proximity to Hole" type="number" value={proximityToHole} onChange={e => setProximityToHole(Number(e.target.value))} InputProps={{ inputProps: { min: 0 } }} />
        <TextField id="putts-amount" label="Putts Amount" type="number" value={puttsAmount} onChange={e => setPuttsAmount(Number(e.target.value))} InputProps={{ inputProps: { min: 0 } }} />
        <TextField id="putt-made-length" label="Putt Made Length" type="number" value={puttMadeLength} onChange={e => setPuttMadeLength(Number(e.target.value))} InputProps={{ inputProps: { min: 0 } }} />
        <FormControlLabel control={<Checkbox checked={scramble} onChange={e => setScramble(e.target.checked)} />} label="Scramble" />
        <FormControlLabel control={<Checkbox checked={sandSave} onChange={e => setSandSave(e.target.checked)} />} label="Sand Save" />
        <TextField id="committed-shots" label="Committed Shots" type="number" value={committedShots} onChange={e => setCommittedShots(Number(e.target.value))} InputProps={{ inputProps: { min: 0 } }} />
        <Button variant="contained" type="submit">Save</Button>
      </Box>
    </div>
  )
}
