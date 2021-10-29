import React from 'react'
import Head from 'components/Head'
import 'twin.macro'
import { Center } from 'components/Layout'
import { useRouter } from 'next/router'

export default function BlackFriday() {
  const router = useRouter()
  const { utm_source } = router.query
  return (
    <div>
      <Head
        title="Black Friday | Nozzle"
        description="Nozzle Black Friday Deal"
      />
      <Center>
        <div tw="py-1/10">
          <div tw=" flex md:(gap-4) gap-2 justify-center items-center">
            <img
              src={require('public/img/logo-blue.png')}
              alt="Enterprise Keyword Rank Tracker Tool For Your Website"
              itemProp="logo"
              tw="h-8 md:(h-24)"
            />
            <div tw="text-black font-bold text-xl md:(text-6xl) ">
              Black Friday
            </div>
          </div>{' '}
          {utm_source == 'RankMath' ? (
            <div tw="md:(text-xl) mt-2">
              A deal with{' '}
              <a
                href="https://rankmath.com/"
                target="_blank"
                rel="noreferrer"
                tw="hover:(underline) text-blue-500"
              >
                Rank Math
              </a>
            </div>
          ) : null}
        </div>
      </Center>
    </div>
  )
}
