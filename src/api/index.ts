import axios from "axios";

export const getAllShips = async () => {
  const response = await axios.post(
    "https://vortex.korabli.su/api/graphql/glossary/",
    {
      query: `{
  vehicles {
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
    \ttitle
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}`,
    }
  );
  return response.data.data.vehicles;
};
