const chordIntervals = [
  {
    "Chord": "maj",
    "Intervals": ["1", "3", "5"],
    "steps": [0, 4, 7],
		"Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", " 4th", " 5th"],
			"Minor Pentatonic": ["2nd"],
			"Blues Scale": ["2nd"],
			"Harmonic Minor": ["5th", "6th"],
			"Melodic Minor": ["4th", "5th"],
			"Whole Tone": [""],
			"Augmented": ["1st", "3rd", "5th"],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["1st", "4th", "5th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "6",
    "Intervals": ["1", "3", "5", "6"],
    "steps": [0, 4, 7, 9],
		"Equal Chords": [{"key": 9, "name": "m7"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
    "scales": {
			"Major Scale": ["1st", "4th", "5th"],
			"Minor Pentatonic": ["2nd"],
			"Blues Scale": ["2nd"],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["1st", "4th", "5th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": " add9",
    "Intervals": ["1", "3", "5", "9"],
    "steps": [0, 2, 4, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
    "scales": {
			"Major Scale": ["1st", "4th", "5th"],
			"Minor Pentatonic": ["2nd"],
			"Blues Scale": ["2nd"],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th", "5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th", "5th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": " add11",
    "Intervals": ["1", "3", "5", "11"],
    "steps": [0, 4, 5, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
    "scales": {
			"Major Scale": ["1st", "5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "5th"],
			"Minor Bebop": ["5th", "8th"]
		}
  },
  {
    "Chord": " add♯11",
    "Intervals": ["1", "3", "5", "♯11"],
    "steps": [0, 4, 6, 7],
		"Equal Chords": [{"key": 6, "name": "7♭59 N3"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
    "scales": {
			"Major Scale": ["4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["4th"],
			"Minor Bebop": ["3rd", "8th"]
		}
  },
  {
    "Chord": "6 add9",
    "Intervals": ["1", "3", "5", "6", "9"],
    "steps": [0, 2, 4, 7, 9],
		"Equal Chords": [{"key": 2, "name": "9sus"}, {"key": 7, "name": "6sus add9"}, {"key": 9, "name": "m11"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
    "scales": {
			"Major Scale": ["1st", "4th", "5th"],
			"Minor Pentatonic": ["2nd"],
			"Blues Scale": ["2nd"],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th", "5th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "6 add9 N5",
    "Intervals": ["1", "3", "6", "9"],
    "steps": [0, 2, 4, 9],
		"Equal Chords": [{"key": 5, "name": "maj13 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
    "scales": {
			"Major Scale": ["1st", "4th", "5th"],
			"Minor Pentatonic": ["2nd"],
			"Blues Scale": ["2nd"],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th", "5th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": " add9/11",
    "Intervals": ["1", "3", "5", "9", "11"],
    "steps": [0, 2, 4, 5, 7],
		"Equal Chords": [{"key": 7, "name": "13sus"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
    "scales": {
			"Major Scale": ["1st", "5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "5th"],
			"Minor Bebop": ["5th", "8th"]
		}
  },
  {
    "Chord": " add9/♯11",
    "Intervals": ["1", "3", "5", "9", "♯11"],
    "steps": [0, 2, 4, 6, 7],
		"Equal Chords": [{"key": 2, "name": "9/11 N5"}, {"key": 7, "name": "maj13sus"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
    "scales": {
			"Major Scale": ["4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th"],
			"Minor Bebop": ["3rd", "8th"]
		}
  },
  {
    "Chord": "6 add9/11",
    "Intervals": ["1", "3", "5", "6", "9", "11"],
    "steps": [0, 2, 4, 5, 7, 9],
		"Equal Chords": [{"key": 5, "name": "maj9/13"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
    "scales": {
			"Major Scale": ["1st", "4th", "5th"],
			"Minor Pentatonic": ["2nd"],
			"Blues Scale": ["2nd"],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th", "5th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "6 add9/♯11",
    "Intervals": ["1", "3", "5", "6", "9", "♯11"],
    "steps": [0, 2, 4, 6, 7, 9],
		"Equal Chords": [{"key": 2, "name": "9/11"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th"],
			"Minor Bebop": ["3rd", "8th"]
		}
  },
  {
    "Chord": "maj7",
    "Intervals": ["1", "3", "5", "7"],
    "steps": [0, 11, 4, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": ["1st", "3rd", "5th"],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "maj7 N5",
    "Intervals": ["1", "3", "7"],
    "steps": [0, 11, 4],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": ["1st", "3rd", "5th"],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "maj9",
    "Intervals": ["1", "3", "5", "7", "9"],
    "steps": [0, 11, 2, 4, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "maj9 N5",
    "Intervals": ["1", "3", "7", "9"],
    "steps": [0, 11, 2, 4],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "maj13",
    "Intervals": ["1", "3", "5", "7", "13"],
    "steps": [0, 11, 4, 7, 9],
		"Equal Chords": [{"key": 9, "name": "m9"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "maj13 NR",
    "Intervals": ["3", "5", "7", "13"],
    "steps": [11, 4, 7, 9],
		"Equal Chords": [{"key": 7, "name": "6 add9 N5"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "maj13 N5",
    "Intervals": ["1", "3", "7", "13"],
    "steps": [0, 11, 4, 9],
		"Equal Chords": [{"key": 9, "name": "m add9"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "maj9/13",
    "Intervals": ["1", "3", "5", "7", "9", "13"],
    "steps": [0, 11, 2, 4, 7, 9],
		"Equal Chords": [{"key": 7, "name": "6 add9/11"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "maj9/13 N5",
    "Intervals": ["1", "3", "7", "9", "13"],
    "steps": [0, 11, 2, 4, 9],
		"Equal Chords": [{"key": 5, "name": "maj13♯11 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "4th"],
			"Minor Bebop": ["3rd", "5th", "8th"]
		}
  },
  {
    "Chord": "maj7♯11",
    "Intervals": ["1", "3", "5", "7", "♯11"],
    "steps": [0, 11, 4, 6, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["4th"],
			"Minor Bebop": ["3rd", "8th"]
		}
  },
  {
    "Chord": "maj9♯11",
    "Intervals": ["1", "3", "5", "7", "9", "♯11"],
    "steps": [0, 11, 2, 4, 6, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["4th"],
			"Minor Bebop": ["3rd", "8th"]
		}
  },
  {
    "Chord": "maj13♯11",
    "Intervals": ["1", "3", "5", "7", "13", "♯11"],
    "steps": [0, 11, 4, 6, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["4th"],
			"Minor Bebop": ["3rd", "8th"]
		}
  },
  {
    "Chord": "maj13♯11 NR",
    "Intervals": ["3", "5", "7", "13", "♯11"],
    "steps": [11, 4, 6, 7, 9],
		"Equal Chords": [{"key": 7, "name": "maj9/13 N5"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["4th"],
			"Minor Bebop": ["3rd", "8th"]
		}
  },
  {
    "Chord": "7",
    "Intervals": ["1", "3", "5", "♭7"],
    "steps": [0, 10, 4, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["4th", "5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "7 N3",
    "Intervals": ["1", "5", "♭7"],
    "steps": [0, 10, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "3rd", "5th", "6th"],
			"Minor Pentatonic": ["1st"],
			"Blues Scale": ["1st"],
			"Harmonic Minor": ["4th", "5th"],
			"Melodic Minor": ["2nd", "4th", "5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["2nd", "3rd", "5th", "6th"],
			"Minor Bebop": ["1st", "2nd", "5th", "6th"]
		}
  },
  {
    "Chord": "7 N5",
    "Intervals": ["1", "3", "♭7"],
    "steps": [0, 10, 4],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["4th", "5th", "7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "9",
    "Intervals": ["1", "3", "5", "♭7", "9"],
    "steps": [0, 10, 2, 4, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th", "5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "9 N5",
    "Intervals": ["1", "3", "♭7", "9"],
    "steps": [0, 10, 2, 4],
		"Equal Chords": [{"key": 6, "name": "7♭5♭13 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th", "5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "11",
    "Intervals": ["1", "3", "5", "♭7", "11"],
    "steps": [0, 10, 4, 5, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "11 NR",
    "Intervals": ["3", "5", "♭7", "11"],
    "steps": [10, 4, 5, 7],
		"Equal Chords": [{"key": 7, "name": "m13 N5"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "11 N5",
    "Intervals": ["1", "3", "♭7", "11"],
    "steps": [0, 10, 4, 5],
		"Equal Chords": [{"key": 5, "name": "maj7sus"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "13",
    "Intervals": ["1", "3", "5", "♭7", "13"],
    "steps": [0, 10, 4, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "13 NR",
    "Intervals": ["3", "5", "♭7", "13"],
    "steps": [10, 4, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "13 N3",
    "Intervals": ["1", "5", "♭7", "13"],
    "steps": [0, 10, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["2nd", "5th"],
			"Minor Bebop": ["1st", "5th", "6th"]
		}
  },
  {
    "Chord": "13 N5",
    "Intervals": ["1", "3", "♭7", "13"],
    "steps": [0, 10, 4, 9],
		"Equal Chords": [{"key": 6, "name": "7♭5♯9 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "9/11",
    "Intervals": ["1", "3", "5", "♭7", "9", "11"],
    "steps": [0, 10, 2, 4, 5, 7],
		"Equal Chords": [{"key": 10, "name": "6 add9/♯11"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "9/11 N5",
    "Intervals": ["1", "3", "♭7", "9", "11"],
    "steps": [0, 10, 2, 4, 5],
		"Equal Chords": [{"key": 5, "name": "maj13sus"}, {"key": 10, "name": "add9/♯11"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "9/13",
    "Intervals": ["1", "3", "5", "♭7", "9", "13"],
    "steps": [0, 10, 2, 4, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "9/13 N5",
    "Intervals": ["1", "3", "♭7", "9", "13"],
    "steps": [0, 10, 2, 4, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "11/13",
    "Intervals": ["1", "3", "5", "♭7", "11", "13"],
    "steps": [0, 10, 4, 5, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "11/13 NR",
    "Intervals": ["3", "5", "♭7", "11", "13"],
    "steps": [10, 4, 5, 7, 9],
		"Equal Chords": [{"key": 9, "name": "7♭5♭13 N3"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "11/13 N5",
    "Intervals": ["1", "3", "♭7", "11", "13"],
    "steps": [0, 10, 4, 5, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["5th"],
			"Minor Bebop": ["5th"]
		}
  },
  {
    "Chord": "7♭9",
    "Intervals": ["1", "3", "5", "♭7", "♭9"],
    "steps": [0, 1, 10, 4, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["5th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭9 N5",
    "Intervals": ["1", "3", "♭7", "♭9"],
    "steps": [0, 1, 10, 4],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["5th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭9♯11",
    "Intervals": ["1", "3", "5", "♭7", "♭9", "♯11"],
    "steps": [0, 1, 10, 4, 6, 7],
		"Equal Chords": [{"key": 6, "name": "7♭9♯11"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭9♭13",
    "Intervals": ["1", "3", "5", "♭7", "♭9", "♭13"],
    "steps": [0, 1, 10, 4, 7, 8],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭9♭13 NR",
    "Intervals": ["3", "5", "♭7", "♭9", "♭13"],
    "steps": [1, 10, 4, 7, 8],
		"Equal Chords": [{"key": 3, "name": "11♭9 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭9♭13 N3",
    "Intervals": ["1", "5", "♭7", "♭9", "♭13"],
    "steps": [0, 1, 10, 7, 8],
		"Equal Chords": [{"key": 3, "name": "11/13 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["3rd"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": ["2nd"]
		}
  },
  {
    "Chord": "11♭9",
    "Intervals": ["1", "3", "5", "♭7", "11", "♭9"],
    "steps": [0, 1, 10, 4, 5, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd", "5th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "11♭9 NR",
    "Intervals": ["3", "5", "♭7", "11", "♭9"],
    "steps": [1, 10, 4, 5, 7],
		"Equal Chords": [{"key": 9, "name": "7♭9♭13 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd", "5th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "11♭9 N5",
    "Intervals": ["1", "3", "♭7", "11", "♭9"],
    "steps": [0, 1, 10, 4, 5],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd", "5th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♭9",
    "Intervals": ["1", "3", "5", "♭7", "13", "♭9"],
    "steps": [0, 1, 10, 4, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["5th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♭9 N5",
    "Intervals": ["1", "3", "♭7", "13", "♭9"],
    "steps": [0, 1, 10, 4, 9],
		"Equal Chords": [{"key": 6, "name": "7♯9♯11 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["5th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♭9 NR/N5",
    "Intervals": ["3", "♭7", "13", "♭9"],
    "steps": [0, 1, 10, 9],
		"Equal Chords": [{"key": 6, "name": "7♯9 NR"}, {"key": 10, "name": "m-maj7♭5"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["5th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭13",
    "Intervals": ["1", "3", "5", "♭7", "♭13"],
    "steps": [0, 10, 4, 7, 8],
		"Equal Chords": [{"key": 8, "name": "maj9♯5"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯9",
    "Intervals": ["1", "3", "5", "♭7", "♯9"],
    "steps": [0, 10, 3, 4, 7],
		"Equal Chords": [{"key": 6, "name": "13♭5♭9 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯9 NR",
    "Intervals": ["3", "5", "♭7", "♯9"],
    "steps": [10, 3, 4, 7],
		"Equal Chords": [{"key": 4, "name": "m-maj7♭5"}, {"key": 6, "name": "13♭9 NR/N5"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯9 N5",
    "Intervals": ["1", "3", "♭7", "♯9"],
    "steps": [0, 10, 3, 4],
		"Equal Chords": [{"key": 6, "name": "13♭5 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭9/♯9",
    "Intervals": ["1", "3", "5", "♭7", "♭9", "♯9"],
    "steps": [0, 1, 10, 3, 4, 7],
		"Equal Chords": [{"key": 3, "name": "13♭9"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯9♯11",
    "Intervals": ["1", "3", "5", "♭7", "♯9", "♯11"],
    "steps": [0, 10, 3, 4, 6, 7],
		"Equal Chords": [{"key": 6, "name": "13♭5♭9"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯9♯11 NR",
    "Intervals": ["3", "5", "♭7", "♯9", "♯11"],
    "steps": [10, 3, 4, 6, 7],
		"Equal Chords": [{"key": 6, "name": "13♭9 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯9♭13",
    "Intervals": ["1", "3", "5", "♭7", "♯9", "♭13"],
    "steps": [0, 10, 3, 4, 7, 8],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯9♭13 NR",
    "Intervals": ["3", "5", "♭7", "♯9", "♭13"],
    "steps": [0, 10, 3, 4, 7, 8],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♯9",
    "Intervals": ["1", "3", "5", "♭7", "13", "♯9"],
    "steps": [0, 10, 3, 4, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♯9 NR",
    "Intervals": ["3", "5", "♭7", "13", "♯9"],
    "steps": [10, 3, 4, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♯9 N5",
    "Intervals": ["1", "3", "♭7", "13", "♯9"],
    "steps": [0, 10, 3, 4, 9],
		"Equal Chords": [{"key": 6, "name": "13♭5♯9 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♯9 NR/N5",
    "Intervals": ["3", "♭7", "13", "♯9"],
    "steps": [10, 3, 4, 9],
		"Equal Chords": [{"key": 6, "name": "13♯9 NR/N5"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯11",
    "Intervals": ["1", "3", "5", "♭7", "♯11"],
    "steps": [0, 10, 4, 6, 7],
		"Equal Chords": [{"key": 6, "name": "7♭5♭9"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "9♯11",
    "Intervals": ["1", "3", "5", "♭7", "9", "♯11"],
    "steps": [0, 10, 2, 4, 6, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "9♯11 NR",
    "Intervals": ["3", "5", "♭7", "9", "♯11"],
    "steps": [10, 2, 4, 6, 7],
		"Equal Chords": [{"key": 4, "name": "m9♭5"}, {"key": 6, "name": "7♯5♭9"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "9♯11 N3",
    "Intervals": ["1", "5", "♭7", "9", "♯11"],
    "steps": [0, 10, 2, 6, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["4th"],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♯11",
    "Intervals": ["1", "3", "5", "♭7", "13", "♯11"],
    "steps": [0, 10, 4, 6, 7, 9],
		"Equal Chords": [{"key": 6, "name": "7♭5♭9/♯9"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♯11 NR",
    "Intervals": ["3", "5", "♭7", "13", "♯11"],
    "steps": [10, 4, 6, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♯11 N3",
    "Intervals": ["1", "5", "♭7", "13", "♯11"],
    "steps": [0, 10, 6, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["4th"],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "m",
    "Intervals": ["1", "♭3", "5"],
    "steps": [0, 3, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "3rd", "6th"],
			"Minor Pentatonic": ["1st"],
			"Blues Scale": ["1st"],
			"Harmonic Minor": ["1st", "4th", "6th"],
			"Melodic Minor": ["1st", "2nd"],
			"Whole Tone": [""],
			"Augmented": ["1st", "3rd", "5th"],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["2nd", "3rd", "4th", "6th"],
			"Minor Bebop": ["1st", "2nd", "6th"]
		}
  },
  {
    "Chord": "m6",
    "Intervals": ["1", "♭3", "5", "6"],
    "steps": [0, 3, 7, 9],
		"Equal Chords": [{"key": 9, "name": "m7♭5"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["4th", "6th"],
			"Melodic Minor": ["1st", "2nd"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["2nd", "4th"],
			"Minor Bebop": ["1st", "6th"]
		}
  },
  {
    "Chord": "m add9",
    "Intervals": ["1", "♭3", "5", "9"],
    "steps": [0, 2, 3, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "6th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["1st", "4th"],
			"Melodic Minor": ["1st"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "4th", "6th"],
			"Minor Bebop": ["1st", "2nd", "6th"]
		}
  },
  {
    "Chord": "m add11",
    "Intervals": ["1", "♭3", "5", "11"],
    "steps": [0, 3, 5, 7],
		"Equal Chords": [{"key": 5, "name": "7sus2"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "3rd", "6th"],
			"Minor Pentatonic": ["1st"],
			"Blues Scale": ["1st"],
			"Harmonic Minor": ["1st"],
			"Melodic Minor": ["1st"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "3rd", "6th"],
			"Minor Bebop": ["1st", "2nd", "6th"]
		}
  },
  {
    "Chord": "m6 add9",
    "Intervals": ["1", "♭3", "5", "6", "9"],
    "steps": [0, 2, 3, 7, 9],
		"Equal Chords": [{"key": 2, "name": "7sus ♭9"}, {"key": 9, "name": "m11♭5"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["4th"],
			"Melodic Minor": ["1st"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "4th"],
			"Minor Bebop": ["1st", "6th"]
		}
  },
  {
    "Chord": "m6 add9 NR",
    "Intervals": ["♭3", "5", "6", "9"],
    "steps": [2, 3, 7, 9],
		"Equal Chords": [{"key": 3, "name": "maj7♭5"}, {"key": 11, "name": "7♯5♯9 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["4th"],
			"Melodic Minor": ["1st"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "4th"],
			"Minor Bebop": ["1st", "6th"]
		}
  },
  {
    "Chord": "m7",
    "Intervals": ["1", "♭3", "5", "♭7"],
    "steps": [0, 10, 3, 7],
		"Equal Chords": [{"key": 3, "name": "6"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "3rd", "6th"],
			"Minor Pentatonic": ["1st"],
			"Blues Scale": ["1st"],
			"Harmonic Minor": ["4th"],
			"Melodic Minor": ["2nd"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["2nd", "3rd", "6th"],
			"Minor Bebop": ["1st", "2nd", "6th"]
		}
  },
  {
    "Chord": "m9",
    "Intervals": ["1", "♭3", "5", "♭7", "9"],
    "steps": [0, 10, 2, 3, 7],
		"Equal Chords": [{"key": 3, "name": "maj13"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "6th"],
			"Minor Pentatonic": ["1st"],
			"Blues Scale": ["1st"],
			"Harmonic Minor": ["4th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "6th"],
			"Minor Bebop": ["1st", "2nd", "6th"]
		}
  },
  {
    "Chord": "m9 N5",
    "Intervals": ["1", "♭3", "♭7", "9"],
    "steps": [0, 10, 2, 3],
		"Equal Chords": [{"key": 2, "name": "7♯5♭9 N3"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "6th"],
			"Minor Pentatonic": ["1st"],
			"Blues Scale": ["1st"],
			"Harmonic Minor": ["4th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "6th"],
			"Minor Bebop": ["1st", "2nd", "6th"]
		}
  },
  {
    "Chord": "m11",
    "Intervals": ["1", "♭3", "5", "♭7", "11"],
    "steps": [0, 10, 3, 5, 7],
		"Equal Chords": [ {"key": 3, "name": "6 add9"}, {"key": 5, "name": "9sus"}, {"key": 10, "name": "6sus add9"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "3rd", "6th"],
			"Minor Pentatonic": ["1st"],
			"Blues Scale": ["1st"],
			"Harmonic Minor": [""],
			"Melodic Minor": ["2nd"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "3rd", "6th"],
			"Minor Bebop": ["2nd", "3rd", "6th"]
		}
  },
  {
    "Chord": "m13",
    "Intervals": ["1", "♭3", "5", "♭7", "13"],
    "steps": [0, 10, 3, 7, 9],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["4th"],
			"Melodic Minor": ["2nd"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["2nd"],
			"Minor Bebop": ["1st", "6th"]
		}
  },
  {
    "Chord": "m13 N5",
    "Intervals": ["1", "♭3", "♭7", "13"],
    "steps": [0, 10, 3, 9],
		"Equal Chords": [{"key": 5, "name": "11 NR"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["4th"],
			"Melodic Minor": ["2nd"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["2nd"],
			"Minor Bebop": ["1st", "6th"]
		}
  },
  {
    "Chord": "m-maj7",
    "Intervals": ["1", "♭3", "5", "7"],
    "steps": [0, 11, 3, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["1st", "6th"],
			"Melodic Minor": ["1st"],
			"Whole Tone": [""],
			"Augmented": ["1st", "3rd", "5th"],
			"HW Diminished": [""],
			"Major Bebop": ["4th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "m-maj7 N5",
    "Intervals": ["1", "♭3", "7"],
    "steps": [0, 11, 3],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["1st", "6th"],
			"Melodic Minor": ["1st"],
			"Whole Tone": [""],
			"Augmented": ["1st", "3rd", "5th"],
			"HW Diminished": [""],
			"Major Bebop": ["4th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "m9-maj7",
    "Intervals": ["1", "♭3", "5", "7", "9"],
    "steps": [0, 11, 2, 3, 7],
    "Equal Chords": [{"key": "", "name": ""}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["1st"],
			"Melodic Minor": ["1st"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["4th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "sus2",
    "Intervals": ["1", "2", "5"],
    "steps": [0, 2, 7],
		"Equal Chords": [{"key": 7, "name": "sus"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "2nd", "4th", "5th", "6th"],
			"Minor Pentatonic": ["2nd", "3rd"],
			"Blues Scale": ["2nd", "3rd"],
			"Harmonic Minor": ["1st", "4th"],
			"Melodic Minor": ["1st", "4th", "5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "2nd", "4th", "5th", "7th"],
			"Minor Bebop": ["1st", "2nd", "3rd", "5th", "6th", "8th"]
		}
  },
  {
    "Chord": "sus",
    "Intervals": ["1", "4", "5"],
    "steps": [0, 5, 7],
		"Equal Chords": [{"key": 5, "name": "sus2"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "2nd", "3rd", "5th", "6th"],
			"Minor Pentatonic": ["3rd", "5th"],
			"Blues Scale": ["3rd", "6th"],
			"Harmonic Minor": ["1st", "5th"],
			"Melodic Minor": ["1st", "2nd", "5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "2nd", "3rd", "5th", "7th"],
			"Minor Bebop": ["1st", "2nd", "5th", "6th", "8th"]
		}
  },
  {
    "Chord": "sus add9",
    "Intervals": ["1", "4", "5", "9"],
    "steps": [0, 2, 5, 7],
		"Equal Chords": [{"key": 7, "name": "7sus"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "2nd", "5th", "6th"],
			"Minor Pentatonic": ["3rd", "5th"],
			"Blues Scale": ["3rd", "6th"],
			"Harmonic Minor": ["1st"],
			"Melodic Minor": ["1st"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "2nd", "5th", "7th"],
			"Minor Bebop": ["1st", "2nd", "5th", "6th", "8th"]
		}
  },
  {
    "Chord": "6sus add9",
    "Intervals": ["1", "4", "5", "6", "9"],
    "steps": [0, 2, 5, 7, 9],
		"Equal Chords": [{"key": 2, "name": "m11"}, {"key": 5, "name": "6 add9"}, {"key": 7, "name": "9sus"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st", "2nd", "5th"],
			"Minor Pentatonic": ["5th"],
			"Blues Scale": ["6th"],
			"Harmonic Minor": [""],
			"Melodic Minor": ["1st"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "2nd", "5th"],
			"Minor Bebop": ["1st", "5th", "6th", "8th"]
		}
  },
  {
    "Chord": "7sus2",
    "Intervals": ["1", "2", "5", "♭7"],
    "steps": [0, 10, 2, 7],
		"Equal Chords": [{"key": 7, "name": "m add11"}],
    "Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "5th", "6th"],
			"Minor Pentatonic": ["3rd"],
			"Blues Scale": ["3rd"],
			"Harmonic Minor": ["4th"],
			"Melodic Minor": ["4th", "5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "5th", "7th"],
			"Minor Bebop": ["1st", "2nd", "5th", "6th"]
		}
  },
  {
    "Chord": "7sus",
    "Intervals": ["1", "4", "5", "♭7"],
    "steps": [0, 10, 5, 7],
		"Equal Chords": [{"key": 5, "name": "sus add9"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "3rd", "5th", "6th"],
			"Minor Pentatonic": ["3rd"],
			"Blues Scale": ["3rd"],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["2nd", "5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "3rd", "5th", "7th"],
			"Minor Bebop": ["1st", "2nd", "5th", "6th"]
		}
  },
  {
    "Chord": "7sus ♭9",
    "Intervals": ["1", "4", "5", "♭7", "♭9"],
    "steps": [0, 1, 10, 5, 7],
		"Equal Chords": [{"key": 7, "name": "m11♭5"}, {"key": 10, "name": "m6 add9"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["3rd"],
			"Minor Pentatonic": [""],
			"Blues Scale": ["3rd"],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["2nd"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": ["2nd", "7th"]
		}
  },
  {
    "Chord": "9sus",
    "Intervals": ["1", "4", "5", "♭7", "9"],
    "steps": [0, 10, 2, 5, 7],
		"Equal Chords": [{"key": 5, "name": "6sus add9"}, {"key": 7, "name": "m11"}, {"key": 10, "name": "6 add9"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "5th", "6th"],
			"Minor Pentatonic": ["3rd"],
			"Blues Scale": ["3rd"],
			"Harmonic Minor": [""],
			"Melodic Minor": ["5th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "5th", "7th"],
			"Minor Bebop": ["1st", "2nd", "5th", "6th"]
		}
  },
  {
    "Chord": "13sus",
    "Intervals": ["1", "4", "5", "♭7", "13"],
    "steps": [0, 10, 5, 7, 9],
		"Equal Chords": [{"key": 5, "name": "add9/11"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["2nd", "5th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "5th"],
			"Minor Bebop": ["1st", "5th", "6th"]
		}
  },
  {
    "Chord": "13sus ♭9",
    "Intervals": ["1", "4", "5", "♭7", "13", "♭9"],
    "steps": [0, 1, 10, 5, 7, 9],
		"Equal Chords": [{"key": 9, "name": "7♯5♭9/♯9"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["2nd"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "maj7 sus",
    "Intervals": ["1", "4", "5", "7"],
    "steps": [0, 11, 5, 7],
    "Equal Chords": [{"key": "", "name": ""}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["1st"],
			"Melodic Minor": ["1st"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "7th"],
			"Minor Bebop": ["5th", "8th"]
		}
  },
  {
    "Chord": "maj13 sus",
    "Intervals": ["1", "4", "5", "7", "13"],
    "steps": [0, 11, 5, 7, 9],
		"Equal Chords": [{"key": 5, "name": " add9/♯11"}, {"key": 7, "name": "9/11 N5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["1st"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["1st"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["1st"],
			"Minor Bebop": ["5th", "8th"]
		}
  },
  {
    "Chord": "dim",
    "Intervals": ["1", "♭3", "♭5"],
    "steps": [0, 3, 6],
    "Equal Chords": [{"key": "", "name": ""}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["7th"],
			"Minor Pentatonic": [""],
			"Blues Scale": ["1st"],
			"Harmonic Minor": ["2nd", "4th", "6th", "7th"],
			"Melodic Minor": ["6th", "7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["2nd", "8th"],
			"Minor Bebop": ["7th"]
		}
  },
  {
    "Chord": "dim7",
    "Intervals": ["1", "♭3", "♭5", "♭♭7"],
    "steps": [0, 3, 6, 9],
		"Equal Chords": [{"key": 3, "name": "dim7"}, {"key": 6, "name": "dim7"}, {"key": 9, "name": "dim7"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["2nd", "4th", "6th", "7th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["2nd", "8th"],
			"Minor Bebop": ["7th"]
		}
  },
  {
    "Chord": "m7♭5",
    "Intervals": ["1", "♭3", "♭5", "♭7"],
    "steps": [0, 10, 3, 6],
		"Equal Chords": [{"key": 3, "name": "m6"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["7th"],
			"Minor Pentatonic": [""],
			"Blues Scale": ["1st"],
			"Harmonic Minor": ["2nd", "4th"],
			"Melodic Minor": ["6th", "7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["2nd", "8th"],
			"Minor Bebop": ["7th"]
		}
  },
  {
    "Chord": "m9♭5",
    "Intervals": ["1", "♭3", "♭5", "♭7", "9"],
    "steps": [0, 10, 2, 3, 6],
		"Equal Chords": [{"key": 2, "name": "7♯5♭9"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["4th"],
			"Melodic Minor": ["6th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "m11♭5",
    "Intervals": ["1", "♭3", "♭5", "♭7", "11"],
    "steps": [0, 10, 3, 5, 6],
		"Equal Chords": [{"key": 3, "name": "m6 add9"}, {"key": 5, "name": "7sus ♭9"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["7th"],
			"Minor Pentatonic": [""],
			"Blues Scale": ["1st"],
			"Harmonic Minor": ["2nd"],
			"Melodic Minor": ["6th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["2nd", "8th"],
			"Minor Bebop": ["7th"]
		}
  },
  {
    "Chord": "m-maj75♭",
    "Intervals": ["1", "♭3", "♭5", "7"],
    "steps": [0, 11, 3, 6],
    "Equal Chords": [{"key": "", "name": ""}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["2nd", "4th", "6th", "8th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "+",
    "Intervals": ["1", "3", "♯5"],
    "steps": [0, 4, 8],
		"Equal Chords": [{"key": 4, "name": "+"}, {"key": 8, "name": "+"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["3rd", "5th", "7th"],
			"Melodic Minor": ["3rd", "5th", "7th"],
			"Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"],
			"Augmented": ["1st", "2nd", "3rd", "4th", "5th", "6th"],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "3rd", "6th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯5",
    "Intervals": ["1", "3", "♯5", "♭7"],
    "steps": [0, 10, 4, 8],
    "Equal Chords": [{"key": "", "name": ""}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["5th", "7th"],
			"Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯5♭9",
    "Intervals": ["1", "3", "♯5", "♭7", "♭9"],
    "steps": [0, 1, 10, 4, 8],
		"Equal Chords": [{"key": 6, "name": "9/♯11 NR"}, {"key": 10, "name": "m9♭5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯5♭9 N3",
    "Intervals": ["1", "♯5", "♭7", "♭9"],
    "steps": [0, 1, 10, 8],
		"Equal Chords": [{"key": 10, "name": "m9 N5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["5th"],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "9♯5",
    "Intervals": ["1", "3", "♯5", "♭7", "9"],
    "steps": [0, 10, 2, 4, 8],
		"Equal Chords": [{"key": 4, "name": "7♭5♭13"}, {"key": 10, "name": "9♭5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["5th"],
			"Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯5♯9",
    "Intervals": ["1", "3", "♯5", "♭7", "♯9"],
    "steps": [0, 10, 3, 4, 8],
    "Equal Chords": [{"key": "", "name": ""}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯5♯9 NR",
    "Intervals": ["3", "♯5", "♭7", "♯9"],
    "steps": [10, 3, 4, 8],
		"Equal Chords": [{"key": 1, "name": "m6 add9 NR"}, {"key": 4, "name": "maj7♭5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♯5♭9/♯9",
    "Intervals": ["1", "3", "♯5", "♭7", "♭9", "♯9"],
    "steps": [0, 1, 10, 3, 4, 8],
		"Equal Chords": [{"key": 3, "name": "13sus ♭9"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["3rd"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "maj7♯5",
    "Intervals": ["1", "3", "♯5", "7"],
    "steps": [0, 11, 4, 8],
    "Equal Chords": [{"key": "", "name": ""}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["3rd"],
			"Melodic Minor": ["3rd"],
			"Whole Tone": [""],
			"Augmented": ["1st", "3rd", "5th"],
			"HW Diminished": [""],
			"Major Bebop": ["1st", "6th"],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "maj ♭5",
    "Intervals": ["1", "3", "♭5"],
    "steps": [0, 4, 6],
    "Equal Chords": [{"key": "", "name": ""}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": ["4th", "7th"],
			"Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": ["4th"],
			"Minor Bebop": ["3rd", "8th"]
		}
  },
  {
    "Chord": "7♭5",
    "Intervals": ["1", "3", "♭5", "♭7"],
    "steps": [0, 10, 4, 6],
		"Equal Chords": [{"key": 6, "name": "7♭5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th", "7th"],
			"Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭5♭9",
    "Intervals": ["1", "3", "♭5", "♭7", "♭9"],
    "steps": [0, 1, 10, 4, 6],
		"Equal Chords": [{"key": 6, "name": "7♯11"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭5♭9 N3",
    "Intervals": ["1", "♭5", "♭7", "♭9"],
    "steps": [0, 1, 10, 6],
		"Equal Chords": [{"key": 6, "name": "add♯11"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭5♯9",
    "Intervals": ["1", "3", "♭5", "♭7", "♯9"],
    "steps": [0, 10, 3, 4, 6],
		"Equal Chords": [{"key": 6, "name": "13♭5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭5♯9 NR",
    "Intervals": ["3", "♭5", "♭7", "♯9"],
    "steps": [10, 3, 4, 6],
		"Equal Chords": [{"key": 6, "name": "13 N5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭5♭9/♯9",
    "Intervals": ["1", "3", "♭5", "♭7", "♭9", "♯9"],
    "steps": [0, 1, 10, 3, 4, 6],
		"Equal Chords": [{"key": 6, "name": "13♯11"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["7th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭5♭13",
    "Intervals": ["1", "3", "♭5", "♭7", "♭13"],
    "steps": [0, 10, 4, 6, 8],
		"Equal Chords": [{"key": 6, "name": "9♭5"}, {"key": 8, "name": "9♯5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["7th"],
			"Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "7♭5♭13 NR",
    "Intervals": ["3", "♭5", "♭7", "♭13"],
    "steps": [4, 10, 6, 8],
		"Equal Chords": [{"key": 6, "name": "9 N5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["7th"],
			"Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "9♭5",
    "Intervals": ["1", "3", "♭5", "♭7", "9"],
    "steps": [0, 10, 2, 4, 6],
		"Equal Chords": [{"key": 2, "name": "9♯5"}, {"key": 6, "name": "7♭5♭13"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "9♭5♭13",
    "Intervals": ["1", "3", "♭5", "♭7", "9", "♭13"],
    "steps": [0, 10, 2, 4, 6, 8],
		"Equal Chords": [{"key": 2, "name": "9♭5♭13"}, {"key": 4, "name": "9♭5♭13"}, {"key": 6, "name": "9♭5♭13"}, {"key": 8, "name": "9♭5♭13"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": ["1st", "2nd", "3rd", "4th", "5th", "6th"],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♭5",
    "Intervals": ["1", "3", "♭5", "♭7", "13"],
    "steps": [0, 10, 4, 6, 9],
		"Equal Chords": [{"key": 6, "name": "7♭5♯9"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♭5 NR",
    "Intervals": ["3", "♭5", "♭7", "13"],
    "steps": [10, 4, 6, 9],
		"Equal Chords": [{"key": 6, "name": "7♯9 N5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♭5 N3",
    "Intervals": ["1", "♭5", "♭7", "13"],
    "steps": [0, 10, 6, 9],
    "Equal Chords": [{"key": "", "name": ""}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": ["4th"],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♭5♭9",
    "Intervals": ["1", "3", "♭5", "♭7", "13", "♭9"],
    "steps": [0, 1, 10, 4, 6, 9],
		"Equal Chords": [{"key": 6, "name": "7♯9♯11"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♭5♭9 N3",
    "Intervals": ["1", "♭5", "♭7", "13", "♭9"],
    "steps": [0, 1, 10, 6, 9],
    "Equal Chords": [{"key": "", "name": ""}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♭5♯9",
    "Intervals": ["1", "3", "♭5", "♭7", "13", "♯9"],
    "steps": [0, 10, 3, 4, 6, 9],
		"Equal Chords": [{"key": 6, "name": "13♭5♯9"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "13♭5♯9 NR",
    "Intervals": ["3", "♭5", "♭7", "13", "♯9"],
    "steps": [10, 3, 4, 6, 9],
		"Equal Chords": [{"key": 6, "name": "13♯9 N5"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": [""],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": [""],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": ["1st", "3rd", "5th", "7th"],
			"Major Bebop": [""],
			"Minor Bebop": [""]
		}
  },
  {
    "Chord": "maj7♭5",
    "Intervals": ["1", "3", "♭5", "7"],
    "steps": [0, 11, 4, 6],
		"Equal Chords": [{"key": 9, "name": "m6 add9 NR"}, {"key": 10, "name": "7♯5♯9 NR"}],
		"Chord Substitutes": [{"key": "", "name": ""}],
		"scales": {
			"Major Scale": ["4th"],
			"Minor Pentatonic": [""],
			"Blues Scale": [""],
			"Harmonic Minor": ["6th"],
			"Melodic Minor": [""],
			"Whole Tone": [""],
			"Augmented": [""],
			"HW Diminished": [""],
			"Major Bebop": ["4th"],
			"Minor Bebop": ["3rd", "8th"]
		}
  }
]