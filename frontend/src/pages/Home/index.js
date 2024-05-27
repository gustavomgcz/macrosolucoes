import Banner from 'components/Banner'
// import News from 'components/News'
import AboutUsSection from 'components/AboutUsSection'
import SolutionsSection from 'components/SolutionsSection'

function Home() {
    return (
        <>
            <Banner />
            <main>
                <SolutionsSection />
                {/* <News /> */}
                <AboutUsSection />
            </main>
        </>
    )
}

export default Home