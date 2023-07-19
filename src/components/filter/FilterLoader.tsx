import {View} from 'react-native';
import {useEffect} from 'react';
import {useAppDispatch} from '../../store';
import {useFindClassQuery} from '~/gql/generated/graphql';
import filterSlice from '~/slices/filterSlice';

const FilterLoader = () => {
  const dispatch = useAppDispatch();
  const {data, isLoadingError} = useFindClassQuery();

  useEffect(() => {
    if (data && !isLoadingError) {
      dispatch(filterSlice.actions.setFilter(data));
    }
  }, [data, dispatch, isLoadingError]);

  return <View />;
};
export default FilterLoader;
