import Layout from '../components/Layout'
import Header from '../components/Header'
import Board from '../components/Board'
import Modal from '../components/Modal'
import { useState } from 'react'

export default function Home() {
  let [showModal, setModal] = useState(false)
  return (
    <Layout>
      <Header />
      <Board setModal={setModal} />
      <Modal showModal={showModal} setModal={setModal} />
    </Layout>
  )
}
