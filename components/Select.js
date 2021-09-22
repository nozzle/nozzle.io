import React, { useRef } from 'react'
import useSelect from 'use-select'
import styled from 'styled-components'
import { matchSorter } from 'match-sorter'
import { FixedSizeList } from 'react-window'
import { Input } from 'components/Html'
import tw from 'twin.macro'
import { FaCaretDown } from 'react-icons/fa'

const StyledInput = styled(Input)`
  ${tw`text-base leading-none w-full hover:(cursor-pointer)`}
  font-family: "Overpass", "Helvetica", "Georgia", sans-serif;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
`

const OptionsWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
`

const Options = styled(FixedSizeList)`
  border-radius: 0.25rem;
  font-weight: normal;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`

const Option = styled.div`
  ${tw`
    px-2 py-1  
    text-sm
    bg-white 
    text-black 
  `}

  min-width: 100%;
  width: auto !important;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${({ selected }) =>
    selected &&
    tw`
      bg-gray-400 text-white 
    `};
  :hover {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`

export default function Select({
  value,
  options,
  onChange,
  multi,
  pageSize = 10,
  itemHeight = 40,
}) {
  const reactWindowInstanceRef = useRef()
  const optionsRef = useRef()

  const scrollToIndex = index => {
    if (!reactWindowInstanceRef.current) {
      return
    }
    reactWindowInstanceRef.current.scrollToItem(index)
  }

  const shiftAmount = pageSize

  const {
    visibleOptions,
    selectedOption,
    highlightedOption,
    getInputProps,
    getOptionProps,
    isOpen,
  } = useSelect({
    multi,
    options,
    value,
    onChange,
    scrollToIndex,
    optionsRef,
    shiftAmount,
    filterFn: (options, value) =>
      matchSorter(options, value, { keys: ['label'] }),
  })

  const height =
    Math.max(Math.min(pageSize, visibleOptions.length), 1) * itemHeight

  return (
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
      }}
    >
      <StyledInput {...getInputProps()} placeholder="Select one..." />
      <FaCaretDown
        css={[
          tw`
        absolute right-2 top-4
        transform -translate-y-1/2
        pointer-events-none
        opacity-70
      `,
        ]}
      />
      <OptionsWrapper ref={optionsRef}>
        {isOpen ? (
          <Options
            ref={reactWindowInstanceRef}
            height={height}
            itemCount={visibleOptions.length || 1}
            itemSize={itemHeight}
            width={300}
          >
            {React.forwardRef(({ index, style, ...rest }, ref) => {
              const option = visibleOptions[index]
              if (!visibleOptions.length) {
                return (
                  <Option ref={ref} style={style}>
                    No options were found...
                  </Option>
                )
              }
              return (
                <Option
                  {...getOptionProps({
                    index,
                    option,
                    ref,
                    style,
                    highlighted: option === highlightedOption,
                    selected: option === selectedOption,
                  })}
                >
                  {option.label}
                </Option>
              )
            })}
          </Options>
        ) : null}
      </OptionsWrapper>
    </div>
  )
}
