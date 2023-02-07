import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import {v4} from 'uuid'

const AddWord = ({ session }) => {
  const [loading, setLoading] = useState(false)
  const [word, setWord] = useState(null)
  const [meaning, setMeaning] = useState(null)
  const [synonyms, setSynonyms] = useState(null)
  const [sentences, setSentences] = useState(null)

//   useEffect(() => {
//     getProfile()
//   }, [session])

//   const getProfile = async () => {
//     try {
//       setLoading(true)
//       const { user } = session

//       let { data, error, status } = await supabase
//         .from('profiles')
//         .select(`username, website, avatar_url`)
//         .eq('id', user.id)
//         .single()

//       if (error && status !== 406) {
//         throw error
//       }

//       if (data) {
//         setUsername(data.username)
//         setWebsite(data.website)
//         setAvatarUrl(data.avatar_url)
//       }
//     } catch (error) {
//       alert(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

  const addWord = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { user } = session

	  console.log(meaning)

      const updates = {
		id: v4(),
        user_id: user.id,
        word,
        meaning,
        // synonyms,
        // sentences,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('word_bank').insert(updates)

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div aria-live="polite">
      {loading ? (
        'Saving ...'
      ) : (
        <form onSubmit={addWord} className="form-widget">
          <div>Email: {session.user.email}</div>
          <div>
            <label htmlFor="word">Word</label>
            <input
              id="word"
              type="text"
              value={word || ''}
              onChange={(e) => setWord(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="meaning">Meaning</label>
            <input
              id="meaning"
              type="text"
              value={meaning || ''}
              onChange={(e) => setMeaning(e.target.value)}
            />
          </div>
          <div>
            <button className="button primary block" disabled={loading}>
				Add Word
            </button>
          </div>
        </form>
      )}
      <button type="button" className="button block" onClick={() => supabase.auth.signOut()}>
        Sign Out
      </button>
    </div>
  )
}

export default AddWord