import axios from "axios";
import { useState } from "react";
import * as S from "./styles";

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

    console.log("pokemonSearch :>> ", pokemonSearch);
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21 21L16.65 16.65"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
