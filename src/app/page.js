import Header from "@/app/components/header/Header";
import SideBar from "@/app/components/sidebar/SideBar";
import Layout from "@/app/components/Layout/Layout";
import Main from "@/app/components/main/Main";
import Footer from "@/app/components/footer/Footer";

export default function Home() {
  return (
      <>
        <Header/>
          <Layout>
              <SideBar/>
              <Main/>
          </Layout>
          <Footer/>
      </>
  )
}
