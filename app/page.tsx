//import Image from 'next/image';
import { CheckboxLabels } from './components/Checkboxbutton';
import { Policy } from './components/Policy';
import { Chat } from './components/Chat';
import Head from 'next/head';

const prefix =
  process.env.NODE_ENV === 'production'
    ? 'https://ji-an-jun.github.io/on-and-on-fit'
    : '';

export default function Home() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 30,
          flexDirection: 'column',
          //backgroundColor: 'grey',
          paddingLeft: 60,
          paddingRight: 60,
          paddingTop: 40,
        }}
      >
        <div
          style={{
            width: 250,
          }}
        >
          <img src={`${prefix}/logo.svg`} />
        </div>
        <div
          style={{
            display: 'flex',
            gap: 60,
            flexDirection: 'row',
            //backgroundColor: 'grey',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 20,
              flexDirection: 'column',
              //backgroundColor: 'grey',
            }}
          >
            <div
              style={{
                fontSize: 40,
                fontWeight: 600,
                color: '#1C1B1F',
                //backgroundColor: 'white',
              }}
            >
              개인정보 수집 및 이용
            </div>
            <Policy />
            <CheckboxLabels />
          </div>
          {/* <Chat /> */}
        </div>
      </div>
    </>
  );
}
