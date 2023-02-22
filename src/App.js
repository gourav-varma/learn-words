import "./index.css";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Auth from "./Auth";
import Account from "./Account";
import AddWord from "./AddWord";
import Homepage from "./Homepage";
import useMediaQuery from "./hooks/useMediaQuery";

export default function App() {
  const [session, setSession] = useState(null);
  const isDesktop = useMediaQuery()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session);
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
      <div className="container h-screen w-screen">
        {/* {!session ? <Auth /> : <Account key={session.user.id} session={session} />} */}
        {/* {!session ? <Auth /> : <AddWord key={session.user.id} session={session} />} */}
        <Homepage />
        {
          isDesktop ? <div className="bg-red-400 h-96 w-screen"></div> : <div></div>
        }
      </div>
  );
}
