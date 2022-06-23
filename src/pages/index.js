import Image from 'next/image';
import Map from '../components/Map';
import styles from '../../styles/Home.module.css';

//components
import Navbar from '../components/Navbar';
import Footers from '../components/Footer';

const DEFAULT_CENTER = [53.2236879, -4.1989901]

export default function Home() {
  return (
    <div>
      <style jsx global>{`
        body {
          background-color: #612378;
          font-family: 'Bai Jamjuree', sans-serif;
          color: white;
        }

        .navbar
        {
            border:1px solid #fff;
        }

        .buttonbook{
          font-size: 26px;
          border: none;
          background-color: #fff;
          color: #612378;
          padding: 10px 60px;
        }
      `}</style>

      <Navbar/>

      <div className='my-5 mb-5 mb-sm-3 text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='display-2'>หมอหมึก</h1>
              <p className='fs-3 mt-3'>ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ</p>
              <button className='mt-4 mb-5 buttonbook'>จองคิว</button>
            </div>
          </div>
        </div>
      </div>

      <section className='per mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 text-center d-block d-lg-none'>
              <Image src='/images/1.png' height={450} width={450} className='mx-auto d-block' alt='...'></Image>
            </div>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 mt-5 mb-5'> 
              <h1 className='display-5'>ประวัติหมอหมึก</h1>
              <div className='fs-4'>
                หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วยลูกแก้วพยากรณ์ ไพ่ทาโร และการดูลายมือ
                <div className='d-none d-lg-block'>
                  <br></br>
                </div>
                ด้วยความสามารถที่หลากหลาย <br></br> ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละบุคคลเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 text-center d-none d-lg-block'>
              <Image src='/images/1.png' height={450} width={450} className='mx-auto d-block' alt='...'></Image>
            </div>
          </div>
        </div>
      </section>

      <div className='review text-center mb-5'>
        <div className='container'>
          <div className='row'>
            <h1 className='display-5'>รีวิวจากลูกค้า</h1>

            <div className='col-12 col-sm-12 col-md-4 col-lg-4 mt-5'>
              <Image src='/images/2.png' height={250} width={250} className='rounded-circle' alt="profile-1"></Image>
              <h2 className='mt-3 mb-4'>แมทธิว นักธุรกิจ</h2>
              <p className='fs-4'>หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลย ตอนนี้ขายได้เทน้ำเทท่าเลยครับ</p>
            </div>

            <div className='col-12 col-sm-12 col-md-4 col-lg-4 mt-5'>
              <Image src='/images/3.png' height={250} width={250} className='rounded-circle' alt="profile-1"></Image>
              <h2 className='mt-3 mb-4'>แจ๊ค นักแสดง</h2>
              <p className='fs-4'>ต้องขอบคุณหมอหมึกในการช่วยความสัมพันธ์ราบรื่นด้วยนะคะ ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ</p>
            </div>

            <div className='col-12 col-sm-12 col-md-4 col-lg-4 mt-5'>
              <Image src='/images/4.png' height={250} width={250} className='rounded-circle' alt="profile-1"></Image>
              <h2 className='mt-3 mb-4'>น้ำใส นักศึกษา</h2>
              <p className='fs-4'>ที่หมอหมึกบอกมานะคะ <br></br> เกิดเกือบหมดเลยค่ะ <br></br> ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้าย ๆ ทันเวลา</p>
            </div>
          </div>
        </div>
      </div>

      <div className='map-detail mt-5 mb-5'>
        <div className='container'>
          <div className='row'>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 ps-lg-5 mt-5 mb-5 d-block d-lg-none'>
              <h1>ทำนายชะตากับหมอหมึก</h1>
              <div className='fs-2'>สามารถจองคิวได้ในเว็บหรือ <br></br> อีเมล: octopus_fortune@teller.com <br></br> โทรศัพท์: 099 XXXX XXX <br></br> และมาที่สำนักงานที่ <br></br> ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ 99999 <br></br> ตามวันและเวลาที่นัดไว้ <br></br><br></br> จำกัดที่ 10 คิวต่อวัน เปิดทำการ <br></br> 10.00 - 18.30 น. พัก 12.00 - 13.00 <br></br> เปิดทุกวันอังคารถึงวันเสาร์ หยุดวันจันทร์และวันอาทิตย์</div>
            </div>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
              <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={13}>
                {({ TileLayer, Marker, Popup }) => (
                  <>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={DEFAULT_CENTER}>
                      <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                    </Marker>
                  </>
                )}
              </Map>
            </div>

            <div className='col-12 col-sm-12 col-md-6 col-lg-6 ps-lg-5 d-none d-lg-block'>
              <h1>ทำนายชะตากับหมอหมึก</h1>
              <div className='fs-2'>สามารถจองคิวได้ในเว็บหรือ <br></br> อีเมล: octopus_fortune@teller.com <br></br> โทรศัพท์: 099 XXXX XXX <br></br> และมาที่สำนักงานที่ <br></br> ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ 99999 <br></br> ตามวันและเวลาที่นัดไว้ <br></br><br></br> จำกัดที่ 10 คิวต่อวัน เปิดทำการ <br></br> 10.00 - 18.30 น. พัก 12.00 - 13.00 <br></br> เปิดทุกวันอังคารถึงวันเสาร์ หยุดวันจันทร์และวันอาทิตย์</div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-12'>
        <Footers/>
      </div>

    </div>
  )
}
