import { useEffect, useState } from 'react'
import './App.css'
import CandidateModel from './models/CandidateModel'
import { Title } from './components/Title'
import { Overview } from './components/Overview'
import { Spinner, Stack } from '@chakra-ui/react'
import { DetailsTabs } from './components/DetailsTabs'

function App() {

  const [candidates, setCandidates] = useState<CandidateModel[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchCandidates() {
      try {
        const response = await fetch(`http://localhost:5038/api/getcandidates`);

        if (!response.ok) {
          throw new Error('Candidates request failed');
        } else {
          const data = await response.json();
          setCandidates(data.result);
      }
      } catch (error) {
        console.error("Error while trying to get candidates.", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCandidates();
  }, []);

  return (
    <Stack gap="32px">
      { loading ? <Spinner /> : 
      <>
      <Title />
      <Overview candidate={candidates[0]} />
      <DetailsTabs candidate={candidates[0]}/>
      </>
      }
    </Stack>
  )
}

export default App