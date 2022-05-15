import React from 'react'
import Avatar from '@mui/material/Avatar';
import {
  
 
  CWidgetStatsA,
   
} from '@coreui/react'
import {
  CCol,
  CRow,
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  
} from "@coreui/react-chartjs";
 
import WidgetsBrand from "../widgets/WidgetsBrand"
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cilArrowTop,
} from '@coreui/icons'

 

const Mainadmin = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  

  return (
    <div style={{marginTop: "70px" , marginRight:"15px", marginLeft:"5px", display: 'flex', justifyContent: 'center'}}>  
<CRow>
  <CCol sm={6}>
    <CWidgetStatsA
      className="mb-4"
      color="primary"
      value={
        <>
          Satisfied{' '}
          <span className="fs-6 fw-normal">
            (90.9% <CIcon icon={cilArrowTop} />)
          </span>
        </>
      }
      title="Your Rating"
       
      chart={
        <CChartLine
          className="mt-3 mx-3"
          style={{ height: '50px' }}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                pointBackgroundColor: '#321fdb',
                data: [65, 59, 84, 84, 51, 55, 40],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                min: 30,
                max: 89,
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              line: {
                borderWidth: 1,
                tension: 0.4,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }}
        />
      }
    />
  </CCol>
  <CCol sm={6}>
    <CWidgetStatsA
      className="mb-4"
      color="info"
      value={
        <>
          Average{' '}
          <span className="fs-6 fw-normal">
            (67.9% <CIcon icon={cilArrowTop} />)
          </span>
        </>
      }
      title="Resolved Cases"
       
      chart={
        <CChartLine
          className="mt-3 mx-3"
          style={{ height: '50px' }}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                pointBackgroundColor: '#39f',
                data: [1, 18, 9, 17, 34, 22, 11],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                min: -9,
                max: 39,
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              line: {
                borderWidth: 1,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }}
        />
      }
    />
  </CCol>
  <CCol sm={6}>
    <CWidgetStatsA
      className="mb-4"
      color="warning"
      value={
        <>
          Satisfied{' '}
          <span className="fs-6 fw-normal">
            (97.9% <CIcon icon={cilArrowTop} />)
          </span>
        </>
      }
      title="Management/Other"
       
      chart={
        <CChartLine
          className="mt-3"
          style={{ height: '50px' }}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40],
                fill: true,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
            elements: {
              line: {
                borderWidth: 2,
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }}
        />
      }
    />
  </CCol>
  <CCol sm={6}>
    <CWidgetStatsA
      className="mb-4"
      color="danger"
      value={
        <>
          Average{' '}
          <span className="fs-6 fw-normal">
            (70.9% <CIcon icon={cilArrowTop} />)
          </span>
        </>
      }
      title="Over All"
      
      chart={
        <CChartBar
          className="mt-3 mx-3"
          style={{ height: '65px' }}
          data={{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
              'January',
              'February',
              'March',
              'April',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                barPercentage: 0.6,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                  drawBorder: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
          }}
        />
      }
    />
  </CCol>
</CRow>
    </div>
  )
}

export default Mainadmin
