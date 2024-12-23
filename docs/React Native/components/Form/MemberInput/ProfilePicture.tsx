import React, {memo, useEffect, useRef} from 'react';
import {FormControl, Icon, Image, Pressable} from '@gluestack-ui/themed';
import {Controller} from 'react-hook-form';
import {ImagePlusIcon} from 'lucide-react-native';
import client from '@/apollo/client';

import type {Member} from '@/schema/members';

import {initial} from './config';
import {QUERY} from '@/apollo/hook/members/useQueryMember';
import uploadFile from '@/utils/firebase/uploadFile';

import UploadImage from '@/components/Controll/UploadImage';
import FormControlErrorMessage from '@/components/UI/FormControlErrorMessage';

/** - 大頭貼照 */
export default memo(function ProfilePicture() {
  const member = useRef<Member>();

  useEffect(() => {
    member.current = client.readQuery({query: QUERY})?.member;
  }, []);

  return (
    <Controller
      control={initial.control}
      name="memberInput.profilePicture"
      render={({field, fieldState: {error}}) => (
        <FormControl isRequired isInvalid={Boolean(error)}>
          <UploadImage
            render={({handlePicker}) => {
              return (
                <Pressable
                  onPress={handlePicker(async v => {
                    const uri = v[0]?.uri;
                    const memberId = member.current?.id;
                    if (memberId && uri) {
                      const result = await uploadFile(
                        uri,
                        `member/profilePicture/${memberId}`,
                      );
                      field.onChange(result);
                    }
                  })}
                  h={128}
                  w={128}
                  alignSelf="center"
                  alignItems="center"
                  justifyContent="center"
                  rounded="$full"
                  overflow="hidden"
                  sx={{
                    backgroundColor: '$backgroundLight200',
                    _dark: {
                      backgroundColor: '$backgroundDark700',
                    },
                  }}>
                  {field.value ? (
                    <Image
                      w="$full"
                      h="$full"
                      source={{uri: field.value}}
                      alt="profilePicture"
                    />
                  ) : (
                    <Icon as={ImagePlusIcon} size="md" />
                  )}
                </Pressable>
              );
            }}
          />
          <FormControlErrorMessage message={error?.message} />
        </FormControl>
      )}
    />
  );
});
