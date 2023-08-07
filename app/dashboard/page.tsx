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

export default function Dashboard() {
  const [score, setScore] = useState(Array(18).fill(undefined))
  const [fairwayHit, setFairwayHit] = useState(Array(18).fill(false))
  const [greenHit, setGreenHit] = useState(Array(18).fill(false))
  const [driveDistance, setDriveDistance] = useState(Array(18).fill(undefined))
  const [approachDistance, setApproachDistance] = useState(Array(18).fill(undefined))
  const [proximityToHole, setProximityToHole] = useState(Array(18).fill(undefined))
  const [puttsAmount, setPuttsAmount] = useState(Array(18).fill(undefined))
  const [puttMadeLength, setPuttMadeLength] = useState(Array(18).fill(undefined))
  const [committedShots, setCommittedShots] = useState(Array(18).fill(undefined))

  const handleSubmit = async (event) => {
    event.preventDefault()
    // TODO: Save the data to the database
  }

  const parThreeHoles = [2, 4, 6, 12, 14]; // Holes 3, 5, 7, 13, 15 are 0-indexed

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 bg-white text-black">
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off" sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': {
          margin: 1,
          color: 'white',
        },
        '& .MuiButton-root': {
          margin: 1,
        },
      }}>
        {Array.from({ length: 18 }, (_, i) => (
          <div className="text-center w-100 " key={i}>
            <h2 className="text-center text-2xl font-bold mb-4">Hole {i + 1}</h2>
            <Box>
              <TextField 
                className="w-full"
                id={`score-${i}`} 
                label="Score" 
                type="number" 
                value={score[i]} 
                onChange={e => setScore(score.map((s, idx) => idx === i ? Number(e.target.value) : s))} 
                InputProps={{ inputProps: { min: 0 } }} 
              />
            </Box>
            <Box>
              <FormControlLabel 
                control={
                  <Checkbox 
                    checked={fairwayHit[i]} 
                    onChange={e => setFairwayHit(fairwayHit.map((f, idx) => idx === i ? e.target.checked : f))} 
                  />
                } 
                label="Fairway Hit" 
              />
            </Box>
            {parThreeHoles.includes(i) ? null : (
              <>
                <TextField
                  className="w-full"
                  id={`drive-distance-${i}`} 
                  label="Drive Distance" 
                  type="number" 
                  value={driveDistance[i]} 
                  onChange={e => setDriveDistance(driveDistance.map((d, idx) => idx === i ? Number(e.target.value) : d))} 
                  InputProps={{ inputProps: { min: 0 } }} 
                />
                <Box>
                  <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={greenHit[i]} 
                        onChange={e => setGreenHit(greenHit.map((g, idx) => idx === i ? e.target.checked : g))} 
                      />
                    }
                    label="Green Hit" 
                  />
                </Box>
              </>
            )}
            <TextField
              className="w-full"
              id={`approach-distance-${i}`} 
              label="Approach Distance" 
              type="number" 
              value={approachDistance[i]} 
              onChange={e => setApproachDistance(approachDistance.map((a, idx) => idx === i ? Number(e.target.value) : a))} 
              InputProps={{ inputProps: { min: 0 } }}
            />
            <TextField
              className="w-full"
              id={`proximity-to-hole-${i}`} 
              label="Proximity to Hole" 
              type="number" 
              value={proximityToHole[i]} onChange={e => setProximityToHole(proximityToHole.map((p, idx) => idx === i ? Number(e.target.value) : p))}
              InputProps={{ inputProps: { min: 0 } }} 
            />
            <TextField
              className="w-full"
              id={`putts-amount-${i}`} 
              label="Putts Amount" 
              type="number" 
              value={puttsAmount[i]} 
              onChange={e => setPuttsAmount(puttsAmount.map((p, idx) => idx === i ? Number(e.target.value) : p))} 
              InputProps={{ inputProps: { min: 0 } }} 
            />
            <TextField
              className="w-full"
              id={`putt-made-length-${i}`} 
              label="Putt Made Length" 
              type="number" 
              value={puttMadeLength[i]} 
              onChange={e => setPuttMadeLength(puttMadeLength.map((p, idx) => idx === i ? Number(e.target.value) : p))} 
              InputProps={{ inputProps: { min: 0 } }} 
            />
            <TextField
              className="w-full"
              id={`committed-shots-${i}`} 
              label="Committed Shots" 
              type="number" 
              value={committedShots[i]} 
              onChange={e => setCommittedShots(committedShots.map((c, idx) => idx === i ? Number(e.target.value) : c))} 
              InputProps={{ inputProps: { min: 0 } }} 
            />
          </div>
        ))}
        <Button 
          className="text-black hover:text-white" 
          variant="contained" 
          type="submit"
        >
          Save
        </Button>
      </Box>
    </div>
  )
}
