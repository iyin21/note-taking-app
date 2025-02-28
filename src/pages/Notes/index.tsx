import Layout from "@components/Layout"
import MyNotesSection from "./components/myNotesSection"
import RecentFolder from "./components/recentFolder"

const MyNotes=()=>{
    return(
        <Layout>
            <section>
            <RecentFolder/>
            </section>
            <section>
                
                <MyNotesSection/>
            </section>
        </Layout>
    )
}

export default MyNotes;