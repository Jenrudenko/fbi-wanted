import { Box, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import WantedPeopleList from "../../components/WantedPeopleList/WantedPeopleList";
import { useGetListOfWantedPeopleByFiltersQuery } from "../../services/api";

export default function Home() {
  const [filters, setFilters] = useState("");

  const { data, isError, isFetching } =
    useGetListOfWantedPeopleByFiltersQuery(filters);
  console.log({ data });

  return (
    <>
      <header>
        <Typography variant="h1" align="center">
          FBI wanted list
        </Typography>
      </header>
      <Box component="main" m={5}>
        <SearchForm onFiltersChange={setFilters} />

        {isFetching || isError ? (
          <Box mt={5}>
            <CircularProgress />
          </Box>
        ) : (
          <WantedPeopleList wantedPeople={data.items} />
        )}
      </Box>
    </>
  );
}
