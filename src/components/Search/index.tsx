import axios from "axios";
import { useState } from "react";
import * as S from "./styles";

import { ReactComponent as SearchIcon } from "../../assets/search.svg";
interface createResApiProps {
  abilities?: [
    alibity: {
      ability: {
        name: string;
        url: string;
      };
    }
  ];
  name?: string;
  sprites?: {
    front_default: string;
    back_default: string;
  };
  img?: string;
  types?: [
    type: {
      type: {
        name: string;
        url: string;
      };
    }
  ];
}

export const Search = () => {
  const [responseApiRenderElements, setResponseApiRenderElements] =
    useState<createResApiProps>({});
  const [showResultsSearch, setShowResultsSearch] = useState(false);

  const requestApi = async (val: HTMLInputElement) => {
    const pokemonSearch = val.value?.toLowerCase();

    setShowResultsSearch(true);

    const res = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
      .then((res) => res.data)
      .catch((error) => error);

    renderElementsApi(res);
  };

  function renderElementsApi(result: createResApiProps) {
    const { abilities, name, types, sprites } = result;

    if (abilities !== undefined) {
      const img = sprites?.front_default
        ? sprites?.front_default
        : sprites?.back_default ?? "";
      setResponseApiRenderElements({ abilities, name, types, img });
    } else {
      setResponseApiRenderElements({});
    }
  }

  return (
    <S.ContainerSearcher>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Buscar"
        onFocus={(value) => (value.target.value = "")}
        onChange={(value) => {
          requestApi(value.target);
        }}
        onKeyDown={(value) => {
          const val = value.target as HTMLInputElement;
          requestApi(val);
        }}
      />
      <SearchIcon />
      <S.ResultSearchContainer className={`${!showResultsSearch && "hide"}`}>
        <S.Close onClick={() => setShowResultsSearch(false)}>X</S.Close>
        {!!responseApiRenderElements.name && (
          <div>
            <img
              src={responseApiRenderElements.img}
              alt={`imagem do ${responseApiRenderElements.name}`}
              className="results-image"
            />
            <div className="results-item-wrapper">
              <h4>
                <strong>Name:</strong> {responseApiRenderElements.name}
              </h4>
              <p>
                <strong>Abilities:</strong>
                {responseApiRenderElements?.abilities?.map((ability) => {
                  const { name } = ability.ability;
                  return <span key={name}>{name}</span>;
                })}
              </p>
              <p>
                <strong>Type:</strong>
                {responseApiRenderElements?.types?.map((type) => {
                  const { name } = type.type;
                  return <span key={name}>{name}</span>;
                })}
              </p>
            </div>
          </div>
        )}
        {!responseApiRenderElements.name && (
          <span className="error">Pokémon não encontrado! :(</span>
        )}
      </S.ResultSearchContainer>
    </S.ContainerSearcher>
  );
};
