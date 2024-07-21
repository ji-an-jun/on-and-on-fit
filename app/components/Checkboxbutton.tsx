'use client';

import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function CheckboxLabels() {
  const [checked, setChecked] = React.useState(false);
  const buttonactivation = checked == true ? {} : { disabled: true };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div
      style={{
        //backgroundColor: 'yellow',
        display: 'flex',
        gap: 5,
        flexDirection: 'column',
        justifyContent: 'start',
        textAlign: 'start',
        alignItems: 'start',
      }}
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label={
            <div style={{ fontSize: 14, color: '#1C1B1F' }}>
              <span style={{ fontWeight: 'bold', color: '#FF8682' }}>
                개인정보 수집 및 이용
              </span>{' '}
              동의
            </div>
          }
        />
      </FormGroup>
      <div style={{ width: '100%' }}>
        <Button
          variant="contained"
          style={{ height: 40, width: '100%' }}
          onClick={() =>
            alert(
              '실험이 종료되었습니다. 진행자의 안내가 있을 때까지 화면을 끄지 말고 기다려주세요.'
            )
          }
          disableElevation
          {...buttonactivation}
        >
          회원가입 완료하기
        </Button>
      </div>
    </div>
  );
}
