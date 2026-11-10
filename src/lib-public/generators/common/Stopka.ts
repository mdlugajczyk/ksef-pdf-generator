import { Content } from 'pdfmake/interfaces';
import FormatTyp from '../../../shared/enums/common.enum';
import {
  createHeader,
  createLabelText,
  createSection,
  createSubHeader,
  generateLine,
  generateTwoColumns,
  getContentTable,
  getTable,
  verticalSpacing,
} from '../../../shared/PDF-functions';
import { translateContent } from '../../../shared/i18n';
import { FormContentState } from '../../../shared/types/additional-data.types';
import { HeaderDefine } from '../../../shared/types/pdf-types';
import { AdditionalDataTypes } from '../../types/common.types';
import { Informacje, Rejestry } from '../../types/fa1.types';
import { FP, Naglowek, Stopka } from '../../types/fa2.types';
import { Zalacznik } from '../../types/fa3.types';
import { generateZalaczniki } from './Zalaczniki';

export function generateStopka(
  additionalData?: AdditionalDataTypes,
  stopka?: Stopka,
  naglowek?: Naglowek,
  wz?: FP[],
  zalacznik?: Zalacznik
): Content[] {
  const wzty: Content[] = generateWZ(wz);
  const rejestry: Content[] = generateRejestry(stopka);
  const informacje: Content[] = generateInformacje(stopka);
  const zalaczniki: Content[] = !additionalData?.isMobile ? generateZalaczniki(zalacznik) : [];

  const result: Content = [
    verticalSpacing(1),
    ...(wzty.length ? [generateLine()] : []),
    ...(wzty.length ? [generateTwoColumns(wzty, [])] : []),
    ...(rejestry.length || informacje.length ? [generateLine()] : []),
    ...rejestry,
    ...informacje,
    ...(zalaczniki.length ? zalaczniki : []),
    createSection(
      [
        {
          stack: createLabelText('Wytworzona w: ', naglowek?.SystemInfo),
          margin: [0, 8, 0, 0],
        },
      ],
      false,
      [0, 0, 0, 0]
    ),
  ];

  return createSection(translateContent(result), false);
}

function generateWZ(wz?: FP[]): Content[] {
  const result: Content[] = [];
  const definedHeader: HeaderDefine[] = [{ name: '', title: 'Numer WZ', format: FormatTyp.Default }];
  const faWiersze: FP[] = getTable(wz ?? []);
  const content: FormContentState = getContentTable<(typeof faWiersze)[0]>(
    [...definedHeader],
    faWiersze,
    '*'
  );

  if (content.fieldsWithValue.length && content.content) {
    result.push(createSubHeader('Numery dokumentów magazynowych WZ', [0, 8, 0, 4]));
    result.push(content.content);
  }
  return result;
}

function generateRejestry(stopka?: Stopka): Content[] {
  const result: Content[] = [];
  const definedHeader: HeaderDefine[] = [
    { name: 'PelnaNazwa', title: 'Pełna nazwa', format: FormatTyp.Default },
    { name: 'KRS', title: 'KRS', format: FormatTyp.Default },
    { name: 'REGON', title: 'REGON', format: FormatTyp.Default },
    { name: 'BDO', title: 'BDO', format: FormatTyp.Default },
  ];
  const faWiersze: Rejestry[] = getTable(stopka?.Rejestry ?? []);
  const content: FormContentState = getContentTable<(typeof faWiersze)[0]>(
    [...definedHeader],
    faWiersze,
    '*',
    undefined,
    30
  );

  if (content.fieldsWithValue.length && content.content) {
    result.push(createHeader('Rejestry'));
    result.push(content.content);
  }
  return result;
}

function generateInformacje(stopka?: Stopka): Content[] {
  const result: Content[] = [];
  const definedHeader: HeaderDefine[] = [
    { name: 'StopkaFaktury', title: 'Stopka faktury', format: FormatTyp.Default },
  ];
  const faWiersze: Informacje[] = getTable(stopka?.Informacje ?? []);
  const content: FormContentState = getContentTable<(typeof faWiersze)[0]>(
    [...definedHeader],
    faWiersze,
    '*'
  );

  if (content.fieldsWithValue.length && content.content) {
    result.push(createHeader('Pozostałe informacje'));
    result.push(content.content);
  }
  return result;
}
