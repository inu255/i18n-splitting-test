import React from 'react'
import { useTranslation } from 'react-i18next';


type Props = {}

export default function First({}: Props) {
  const { t, i18n } = useTranslation();

  return (
    <div>{t('componentNumber', {ns: 'first'} )}</div>
  )
}