import { cn } from '@/lib/utils';
import * as React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { User,ShoppingCart, ArrowRight } from 'lucide-react';
 interface Props {
    className?: string;
 }

 export const Header: React.FC<Props> = ({className})=> {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>

                <div className='flex items-center gap-4'>
                    <Image src='/logo.png' alt='logo' width={35} height={35}/>
                    <div>
                        <h1 className='text-2x1 uppercase font-black'>Next Pizza</h1>
                        <p className='text-sm text-gray-400 leading-3'>Вкусней уже некуда</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <Button variant='outline' className='flex items-center gap-1'>
                    <User size={16}/>
                        Войти
                    </Button>
                    <div>
                        <Button className='group relative'>
                            <b>520 P</b>
                            <span className='h-full w-[1px] bg-white/30 mx-3'></span>
                            <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                            <ShoppingCart className='h-4 w-4 elative' strokeWidth={2} />
                            </div>
                            <ArrowRight size={20} className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'/>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
 }