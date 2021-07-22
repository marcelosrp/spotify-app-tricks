import React from 'react'
import Logo from '../../Components/Logo'
import FormSearch from '../../Components/FormSearch'
import Avatar from '../../Components/Avatar'
import TrackResults from '../../Components/TrackResults'
import Player from '../../Components/Player'

import * as S from './styles'

export default function DashboardTemplate({
  handleSearch,
  handleChooseTrack,
  search,
  searchResults,
  playingTrack,
  lyrics,
  accessToken
}) {
  return (
    <S.Container>
      <S.Sidebar>
        <Logo />
      </S.Sidebar>
      <S.Content>
        <S.Header>
          <FormSearch search={search} handleSearch={handleSearch} />
          <Avatar />
        </S.Header>

        <S.SongsWrapper>
          {searchResults.map((track) => {
            return (
              <TrackResults
                track={track}
                key={track.uri}
                handleChooseTrack={handleChooseTrack}
              />
            )
          })}
          {searchResults.length === 0 && <S.Lyrics>{lyrics}</S.Lyrics>}
        </S.SongsWrapper>

        <S.PlayerWrapper>
          <Player token={accessToken} trackUri={playingTrack?.uri} />
        </S.PlayerWrapper>
      </S.Content>
    </S.Container>
  )
}
