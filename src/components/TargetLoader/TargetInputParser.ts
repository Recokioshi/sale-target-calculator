import { Target } from '../../Target';

type RegexGroups =
  | {
      nameSeparator: string;
      first_separator: string;
      second_separator: string;
      name: string;
      today: number;
      done: number;
      total: number;
    }
  | undefined;

const targetRegexp = /(?<name>.*)(?<name_separator>[^0-9])(?<today>[0-9]+)(?<first_separator>[^0-9])(?<done>[0-9]+)(?<second_separator>[^0-9])(?<total>[0-9]+)/;

const splitInputPerRows = (input: string) => input.split(/\n/);
const matchTargetRegex = (input: string) => input.match(targetRegexp);
const separatorsMatch = (groups: RegexGroups): boolean =>
  !!groups && groups.first_separator === groups.second_separator;
const parseGroup = (groups: RegexGroups): Target | null => {
  return groups ? { name: groups.name, today: groups.today, done: groups.done, total: groups.total } : null;
};
const checkEveryRow = (parsedRows: (Target | null)[]): Target[] | null =>
  parsedRows.every((row) => !!row) ? (parsedRows as Target[]) : null;

export const parseTargetInput = (targetInput: string): Target[] | null => {
  const rowsArray = splitInputPerRows(targetInput);
  const matchedRows = rowsArray.map(matchTargetRegex);
  const parsedRows = matchedRows.map((row) => {
    return separatorsMatch(row?.groups as RegexGroups) ? parseGroup(row?.groups as RegexGroups) : null;
  });
  const rowsChecked = checkEveryRow(parsedRows);
  return rowsChecked;
};
