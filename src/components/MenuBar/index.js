import React from "react"

import { Home } from "@styled-icons/evaicons-solid/Home"
import { SearchAlt as Search } from "@styled-icons/boxicons-regular/SearchAlt"
import { ArrowheadUpOutline as UpArrow } from "@styled-icons/evaicons-outline/ArrowheadUpOutline"
import { LightBulb as Light } from "@styled-icons/heroicons-solid/LightBulb"
import { Grid } from "@styled-icons/evaicons-solid/Grid"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/" title="Voltar para Home">
        <S.MenuBarItem>
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>
      <S.MenuBarLink to="/search" title="Pesquisar">
        <S.MenuBarItem>
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>

    <S.MenuBarGroup>
      <S.MenuBarItem title="Mudar o tema">
        <Light />
      </S.MenuBarItem>
      <S.MenuBarItem title="Mudar visualização">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Ir para o topo">
        <UpArrow />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
