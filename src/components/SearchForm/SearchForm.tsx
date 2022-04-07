import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  TextField,
} from "@mui/material";
import debounce from "lodash.debounce";
import { useEffect, useMemo, useState } from "react";
import AnimateHeight from "react-animate-height";
import { capitalizeFirstLetter } from "../../utils/strings";
import { Race, Sex } from "./constants";

export default function SearchForm({ onFiltersChange }: any) {
  const [filtersSectionVisible, setFiltersSectionVisible] = useState(false);
  const [filtersHeight, setFiltersHeight] = useState<any>(0);
  const [filters, setFilters] = useState<any>({});

  const toggleFilterList = () => {
    setFiltersSectionVisible((prevState) => !prevState);
    setFiltersHeight((prevState: any) => (prevState === 0 ? "auto" : 0));
  };

  const debouncedFilterChange = useMemo(() => {
    return debounce(onFiltersChange, 300);
  }, [onFiltersChange]);

  const handleFilterChange = (name: string, value: string) => {
    setFilters((currentFilters: any) => ({ ...currentFilters, [name]: value }));
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange("title", event.target.value);
  };
  const handleSexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange("sex", event.target.value);
  };
  const handleRaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange("race", event.target.value);
  };

  useEffect(() => {
    debouncedFilterChange(filters);
  }, [debouncedFilterChange, filters]);

  return (
    <Box display="flex" flexDirection="column" alignItems="stretch">
      <TextField
        value={filters.title}
        label="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="filter search results"
                onClick={toggleFilterList}
              >
                {filtersSectionVisible ? (
                  <FilterListOffIcon />
                ) : (
                  <FilterListIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
          type: "search",
        }}
        onChange={handleSearch}
      />
      <AnimateHeight duration={500} height={filtersHeight}>
        <div>
          <Box mt={4} mb={3}>
            <Paper elevation={3}>
              <Box p={4}>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item>
                    <TextField
                      select
                      label="Sex"
                      value={filters.sex || ""}
                      sx={{ minWidth: 90 }}
                      onChange={handleSexChange}
                    >
                      <MenuItem key="None" value="">
                        None
                      </MenuItem>
                      {Object.values(Sex).map((sex) => (
                        <MenuItem key={sex} value={sex}>
                          {capitalizeFirstLetter(sex)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      select
                      label="Race"
                      value={filters.race || ""}
                      sx={{ minWidth: 90 }}
                      onChange={handleRaceChange}
                    >
                      <MenuItem key="None" value="">
                        None
                      </MenuItem>
                      {Object.values(Race).map((race) => (
                        <MenuItem key={race} value={race}>
                          {capitalizeFirstLetter(race)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </div>
      </AnimateHeight>
    </Box>
  );
}
